import Container from '@quarter/contracts/Container'
import Driver from '@quarter/contracts/Driver'
import Entity from '@quarter/contracts/Entity'
import ManagerContract from '@quarter/contracts/Manager'

export default class Manager<Class> implements ManagerContract<Class> {
  protected drivers = new Map()
  protected instances = new Map()

  constructor(protected config: Entity, protected container: Container) {}

  private build(key: any) {
    const config = this.config.from(`drivers.${key}`)

    if (!config) {
      throw new Error(`Missing [${key}] driver config.`)
    }

    const driver = this.drivers.get(key)

    if (!driver) {
      throw new Error(`Missing [${key}] driver.`)
    }

    return driver(config, this.container)
  }

  public register(key: any, driver: Driver<Class>): void {
    this.drivers.set(key, driver)
  }

  public resolve(key: any = this.config.get('default', 'default')): Class {
    if (!this.instances.has(key)) {
      this.instances.set(key, this.build(key))
    }

    return this.instances.get(key)
  }
}
