import Projector from '@quarter/contracts/Projector'
import Query from '@quarter/contracts/Query'
import Manager from '@quarter/support/Manager'

export default class ProjectorManager extends Manager<Projector> implements Projector {
  public get<Response>(query: Query) {
    return this.resolve().get<Response>(query)
  }

  public observe<Response>(query: Query) {
    return this.resolve().observe<Response>(query)
  }
}
