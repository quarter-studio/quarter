import { Manager } from "@quarter/support";
import { Projector, Query } from "@quarter/contracts";

export class ProjectorManager extends Manager<Projector> implements Projector {
  public get<Response>(query: Query) {
    return this.resolve().get<Response>(query);
  }

  public observe<Response>(query: Query) {
    return this.resolve().observe<Response>(query);
  }
}
