import { Observable } from "rxjs";
import { Query } from "./Query";

export interface Projector {
  get<Response>(query: Query): Promise<Response>;
  observe<Response>(query: Query): Observable<Response>;
}
