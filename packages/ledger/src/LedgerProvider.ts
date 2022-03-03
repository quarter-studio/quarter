import { Provider } from "@quarter/support";
import { LedgerManager } from "./LedgerManager";

export class LedgerProvider extends Provider {
  public register() {
    this.app.share("ledger", () => {
      const config = this.app.config.from("ledger");
      return new LedgerManager(config, this.app);
    });
  }
}
