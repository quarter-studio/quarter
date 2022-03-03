import { Bootstrapper } from "./Bootstrapper";
import { Container } from "./Container";
import { Constructor } from "./Constructor";
import { Dispatcher } from "./Dispatcher";
import { Entity } from "./Entity";
import { Provider } from "./Provider";

export interface Application extends Bootstrapper, Container {
  get config(): Entity;
  get events(): Dispatcher;
  register<Instance extends Provider>(
    Provider: Constructor<Instance>
  ): Instance;
}
