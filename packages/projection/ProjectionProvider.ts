import Provider from '@quarter/support/Provider'
import ProjectorManager from './ProjectorManager'

export default class ProjectionProvider extends Provider {
  public register() {
    this.app.share('projector', () => {
      const config = this.app.config.from('projection.projector')
      return new ProjectorManager(config, this.app)
    })
  }
}
