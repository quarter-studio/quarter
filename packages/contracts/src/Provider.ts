import { Bootstrapper } from "./Bootstrapper";

export interface Provider extends Bootstrapper {
  register(): void;
}
