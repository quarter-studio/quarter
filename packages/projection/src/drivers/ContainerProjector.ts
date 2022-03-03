import { Container, Projector, Query } from "@quarter/contracts";

export class ContainerProjector implements Projector {
  constructor(protected container: Container) {}

  public async get<Response>(query: Query) {
    return this.container
      .make<Projector>(query.constructor)
      .get<Response>(query);
  }

  observe<Response>(query: Query) {
    return this.container
      .make<Projector>(query.constructor)
      .observe<Response>(query);
  }
}
