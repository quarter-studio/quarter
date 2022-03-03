import Provider from '@quarter/support/Provider'
import LedgerManager from './LedgerManager'

export default class LedgerProvider extends Provider {
  public register() {
    this.app.share('ledger', () => {
      const config = this.app.config.from('ledger')
      return new LedgerManager(config, this.app)
    })
  }
}
