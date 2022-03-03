import Provider from '@quarter/support/Provider'
import ProcessorManager from './ProcessorManager'

export default class CacheProvider extends Provider {
  public register() {
    this.app.share('processor', () => {
      const config = this.app.config.from('processing.processor')
      return new ProcessorManager(config, this.app)
    })
  }
}
