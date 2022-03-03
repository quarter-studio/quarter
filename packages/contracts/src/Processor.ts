import { Command } from "./Command";

export interface Processor {
  dispatch<Response>(command: Command): Promise<Response>;
}
