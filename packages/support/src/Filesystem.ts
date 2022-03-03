import { Filesystem as FilesystemContract } from "@quarter/contracts";
import { existsSync, readdirSync, readFileSync, writeFileSync } from "fs";
import { relative, resolve } from "path";

export class Filesystem implements FilesystemContract {
  constructor(protected path: string) {}

  public exists(path: string) {
    return existsSync(this.resolve(path));
  }

  public files(path: string) {
    return readdirSync(this.resolve(path));
  }

  public from(path: string): this {
    //@ts-ignore
    return new this.constructor(this.resolve(path));
  }

  public read(path: string, value: string = "") {
    const filepath = this.resolve(path);
    if (!existsSync(filepath)) return value;
    return readFileSync(filepath, "utf8");
  }

  public readJSON(path: string, value: any = {}) {
    const filepath = this.resolve(path);
    if (!existsSync(filepath)) return value;
    return JSON.parse(readFileSync(filepath, "utf8"));
  }

  public resolve(path: string) {
    return resolve(this.path, path);
  }

  public relative(path: string) {
    return relative(this.path, path);
  }

  public write(path: string, value: string) {
    return writeFileSync(this.resolve(path), value);
  }

  public writeJSON(path: string, value: any) {
    return this.write(path, JSON.stringify(value));
  }
}
