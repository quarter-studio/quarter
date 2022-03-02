import { Container } from "@quarter/container";
import { Constructor } from "@quarter/contracts";
import { Entity } from "@quarter/support";
import { Provider } from "./Provider";

export class Application extends Container {
  protected booted = false;
  protected providers = new Map<any, Provider>();

  constructor(config?: any) {
    super();
    this.provide("app", this);
    this.provide("config", new Entity(config));
  }

  public get config() {
    return this.make<Entity>("config");
  }

  public boot() {
    if (!this.booted) {
      this.providers.forEach((provider) => provider.boot());
      this.booted = true;
    }
  }

  public register<Instance extends Provider>(Provider: Constructor<Instance>) {
    if (this.providers.has(Provider)) {
      return this.providers.get(Provider) as Instance;
    }

    const provider = new Provider(this);
    this.providers.set(Provider, provider);
    provider.register();

    if (this.booted) {
      provider.boot();
    }

    return provider;
  }
}
