import Container from '@quarter/container/Container'
import ApplicationContract from '@quarter/contracts/Application'
import Constructor from '@quarter/contracts/Constructor'
import Provider from '@quarter/contracts/Provider'
import Dispatcher from '@quarter/support/Dispatcher'
import Entity from '@quarter/support/Entity'

export default class Application extends Container implements ApplicationContract {
  protected booted = false
  protected providers = new Map<any, Provider>()

  constructor(config?: any) {
    super()
    this.provide('app', this)
    this.provide('config', new Entity(config))
    this.provide('events', new Dispatcher())
    this.registerConfigProviders()
  }

  public get config() {
    return this.make<Entity>('config')
  }

  public get events() {
    return this.make<Dispatcher>('events')
  }

  public boot() {
    if (!this.booted) {
      this.providers.forEach((provider) => provider.boot())
      this.booted = true
    }
  }

  public register<Class extends Provider>(Provider: Constructor<Class>) {
    if (this.providers.has(Provider)) {
      return this.providers.get(Provider) as Class
    }

    const provider = new Provider(this)
    this.providers.set(Provider, provider)
    provider.register()

    if (this.booted) {
      provider.boot()
    }

    return provider
  }

  protected registerConfigProviders() {
    const providers = this.config.get('app.providers', [])
    providers.forEach((Provider) => this.register(Provider))
  }
}
