import { Command, Container, Processor } from "@quarter/contracts";

export class ContainerProcessor implements Processor {
  constructor(protected container: Container) {}

  public async dispatch<Response>(command: Command) {
    return this.container
      .make<Processor>(command.constructor)
      .dispatch<Response>(command);
  }
}
