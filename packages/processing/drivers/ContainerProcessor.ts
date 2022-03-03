import Command from '@quarter/contracts/Command'
import Container from '@quarter/contracts/Container'
import Processor from '@quarter/contracts/Processor'

export default class ContainerProcessor implements Processor {
  constructor(protected container: Container) {}

  public async dispatch<Response>(command: Command) {
    return this.container.make<Processor>(command.constructor).dispatch<Response>(command)
  }
}
