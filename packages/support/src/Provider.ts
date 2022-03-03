import { Application } from "@quarter/contracts";

export class Provider {
  constructor(protected app: Application) {}
  public boot() {}
  public register() {}
}
