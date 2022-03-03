import Bootstrapper from './Bootstrapper'
import Constructor from './Constructor'
import Container from './Container'
import Dispatcher from './Dispatcher'
import Entity from './Entity'
import Provider from './Provider'

export default interface Application extends Bootstrapper, Container {
  get config(): Entity
  get events(): Dispatcher
  register<Instance extends Provider>(Provider: Constructor<Instance>): Instance
}
