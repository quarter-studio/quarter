import Command from '@quarter/contracts/Command'
import Processor from '@quarter/contracts/Processor'
import Manager from '@quarter/support/Manager'

export default class ProcessorManager extends Manager<Processor> implements Processor {
  dispatch<Response>(command: Command) {
    return this.resolve().dispatch<Response>(command)
  }
}
