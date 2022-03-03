import Command from './Command'

export default interface Processor {
  dispatch<Response>(command: Command): Promise<Response>
}
