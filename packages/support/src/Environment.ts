import { Filesystem } from "@quarter/contracts";
import { Entity } from "./Entity";
import { config } from "dotenv";

export class Environment extends Entity {
  constructor(protected filesystem: Filesystem) {
    super(process.env);
    this.load(".env").load(".env.local");
  }

  load(...segments: string[]) {
    if (this.filesystem.exists(...segments)) {
      config({ path: this.filesystem.resolve(...segments) });
    }

    return this;
  }
}
