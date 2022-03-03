import Container from '@quarter/contracts/Container'
import Projector from '@quarter/contracts/Projector'
import Query from '@quarter/contracts/Query'

export default class ContainerProjector implements Projector {
  constructor(protected container: Container) {}

  public async get<Response>(query: Query) {
    return this.container.make<Projector>(query.constructor).get<Response>(query)
  }

  observe<Response>(query: Query) {
    return this.container.make<Projector>(query.constructor).observe<Response>(query)
  }
}
