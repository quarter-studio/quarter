import Fact from '@quarter/contracts/Fact'
import Ledger from '@quarter/contracts/Ledger'
import { lastValueFrom, Observable, ReplaySubject, timer } from 'rxjs'
import { filter, groupBy, mergeAll, takeUntil, toArray } from 'rxjs/operators'

export default class InMemoryLedger implements Ledger {
  protected ledger = new ReplaySubject<Fact>()

  protected topics = this.ledger.pipe(
    groupBy((fact) => {
      return fact.topic
    })
  )

  public record(facts: Fact[]): Promise<boolean> {
    facts.forEach((fact) => this.ledger.next(fact))
    return Promise.resolve(true)
  }

  public get(topic?: string): Promise<Fact[]> {
    return lastValueFrom(this.observe(topic).pipe(toArray(), takeUntil(timer(0))))
  }

  public observe(topic?: string): Observable<Fact> {
    if (!topic) return this.ledger.asObservable()
    return this.topics.pipe(
      filter((group) => group.key === topic),
      mergeAll()
    )
  }
}
