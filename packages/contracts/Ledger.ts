import { Observable } from 'rxjs'
import Fact from './Fact'

export default interface Ledger {
  get(topic?: string): Promise<Fact[]>
  observe(topic?: string): Observable<Fact>
  record(facts: Fact[]): Promise<boolean>
}
