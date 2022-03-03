import Fact from '@quarter/contracts/Fact'
import Ledger from '@quarter/contracts/Ledger'
import Manager from '@quarter/support/Manager'

export default class LedgerManager extends Manager<Ledger> implements Ledger {
  public get(topic?: string) {
    return this.resolve().get(topic)
  }

  public observe(topic?: string) {
    return this.resolve().observe(topic)
  }

  public record(facts: Fact[]) {
    return this.resolve().record(facts)
  }
}
