import { Application } from "./Application";

export class Provider {
  constructor(protected app: Application) {}
  public boot() {}
  public register() {}
}
