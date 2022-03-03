import Application from '@quarter/contracts/Application'

export default class Provider {
  constructor(protected app: Application) {}
  public boot() {}
  public register() {}
}
