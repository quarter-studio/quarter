import { Manager } from "@quarter/support";
import { Command, Processor } from "@quarter/contracts";

export class ProcessorManager extends Manager<Processor> implements Processor {
  dispatch<Response>(command: Command) {
    return this.resolve().dispatch<Response>(command);
  }
}
