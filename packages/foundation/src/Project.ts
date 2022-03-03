import { Environment, Filesystem } from "@quarter/support";
import { Application } from "./Application";
import { join, parse } from "path";

export class Project extends Application {
  constructor(path: string, config?: any) {
    super(config);
    this.provide("filesystem", new Filesystem(path));
    this.provide("environment", new Environment(this.filesystem));
    this.registerConfig();
    this.registerConfigProviders();
  }

  get env() {
    return this.make<Environment>("environment");
  }

  get filesystem() {
    return this.make<Filesystem>("filesystem");
  }

  public appPath(path: string = ".") {
    const basepath = this.config.get("paths.app", "app");
    return this.basePath(join(basepath, path));
  }

  public basePath(path: string = ".") {
    return this.filesystem.resolve(path);
  }

  public buildPath(path: string = ".") {
    const basepath = this.config.get("paths.build", "build");
    return this.basePath(join(basepath, path));
  }

  public configPath(path: string = ".") {
    const basepath = this.config.get("paths.config", "config");
    return this.basePath(join(basepath, path));
  }

  public publicPath(path: string = ".") {
    const basepath = this.config.get("paths.public", "public");
    return this.basePath(join(basepath, path));
  }

  public storagePath(path: string = ".") {
    const basepath = this.config.get("paths.storage", "storage");
    return this.basePath(join(basepath, path));
  }

  private registerConfig(path = this.configPath()) {
    if (this.filesystem.exists(path)) {
      const filesystem = this.filesystem.from(path);
      filesystem.files(".").forEach((file) => {
        const { name } = parse(file);
        const filepath = filesystem.resolve(file);
        const config = require(filepath).default(this);
        this.config.merge({ [name]: config });
      });
    }
  }
}
