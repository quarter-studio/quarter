import { Command, Feature as FeatureContract, Query } from "@quarter/contracts";
import { Observable } from "rxjs";

export class Feature implements FeatureContract {
  dispatch<Response>(command: Command): Promise<Response> {
    throw new Error("Method not implemented.");
  }

  get<Response>(query: Query): Promise<Response> {
    throw new Error("Method not implemented.");
  }

  observe<Response>(query: Query): Observable<Response> {
    throw new Error("Method not implemented.");
  }
}
