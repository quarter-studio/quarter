import Provider from '@quarter/support/Provider'
import CacheManager from './CacheManager'

export default class CacheProvider extends Provider {
  public register() {
    this.app.share('cache', () => {
      const config = this.app.config.from('cache')
      return new CacheManager(config, this.app)
    })
  }
}
