export class Container {
  protected aliases = new Map();
  protected bindings = new Map();
  protected instances = new Map();

  public alias(alias: any, key: any) {
    this.aliases.set(alias, key);
  }

  public bind(key: any, build: Function, shared = false) {
    this.bindings.set(key, { build, shared });
  }

  public build<Instance>(key: any, args: any[]): Instance {
    if (this.instances.has(key)) {
      return this.instances.get(key);
    }

    const binding = this.bindings.get(key);
    const instance = binding.build(...args);

    if (binding.shared) {
      this.provide(key, instance);
    }

    return instance;
  }

  public make<Instance>(key: any, ...args: any[]) {
    while (this.aliases.has(key)) {
      key = this.aliases.get(key);
    }

    return this.build<Instance>(key, args);
  }

  public provide(key: any, instance: any) {
    this.instances.set(key, instance);
  }

  public share(key: any, build: Function) {
    this.bind(key, build, true);
  }
}
