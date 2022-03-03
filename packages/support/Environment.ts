import Filesystem from '@quarter/contracts/Filesystem'
import { config } from 'dotenv'
import Entity from './Entity'

export default class Environment extends Entity {
  constructor(protected filesystem: Filesystem) {
    super(process.env)
    this.load('.env')
    this.load('.env.local')
    this.load(`.env.${this.mode}`)
    this.load(`.env.${this.mode}.local`)
  }

  public get mode() {
    return this.get<string>('NODE_ENV', 'production')
  }

  public development(value: any, fallback?: any) {
    return this.when('development', value, fallback)
  }

  public load(path: string) {
    if (this.filesystem.exists(path)) {
      config({ path: this.filesystem.resolve(path) })
    }

    return this
  }

  public production(value: any, fallback?: any) {
    return this.development(fallback, value)
  }

  public when(mode: string, value: any, fallback?: any) {
    return mode === this.mode ? value : fallback
  }
}
