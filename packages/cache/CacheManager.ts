import Cache from '@quarter/contracts/Cache'
import Manager from '@quarter/support/Manager'

export default class CacheManager extends Manager<Cache> implements Cache {
  public delete(key: string) {
    return this.resolve().delete(key)
  }

  public get<Class>(key: string, expiration: number | Date, resolve: () => Promise<Class>) {
    return this.resolve().get(key, expiration, resolve)
  }

  public set(key: string, expiration: number | Date, value: any) {
    return this.resolve().set(key, expiration, value)
  }
}
