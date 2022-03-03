import ContainerContract from '@quarter/contracts/Container'

export default class Container implements ContainerContract {
  protected aliases = new Map()
  protected bindings = new Map()
  protected instances = new Map()

  constructor() {
    this.provide('container', this)
  }

  public alias(alias: any, key: any) {
    this.aliases.set(alias, key)
  }

  public bind(key: any, build: Function, shared = false) {
    this.bindings.set(key, { build, shared })
  }

  public build<Class>(key: any, args: any[]): Class {
    if (this.instances.has(key)) {
      return this.instances.get(key)
    }

    const binding = this.bindings.get(key)
    const instance = binding.build(...args)

    if (binding.shared) {
      this.provide(key, instance)
    }

    return instance
  }

  public make<Class>(key: any, ...args: any[]) {
    while (this.aliases.has(key)) {
      key = this.aliases.get(key)
    }

    return this.build<Class>(key, args)
  }

  public provide(key: any, instance: any) {
    this.instances.set(key, instance)
  }

  public share(key: any, build: Function) {
    this.bind(key, build, true)
  }
}
