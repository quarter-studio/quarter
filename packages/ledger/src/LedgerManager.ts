import { Manager } from "@quarter/support";
import { Fact, Ledger } from "@quarter/contracts";

export class LedgerManager extends Manager<Ledger> implements Ledger {
  public get(topic?: string) {
    return this.resolve().get(topic);
  }

  public observe(topic?: string) {
    return this.resolve().observe(topic);
  }

  public record(facts: Fact[]) {
    return this.resolve().record(facts);
  }
}
