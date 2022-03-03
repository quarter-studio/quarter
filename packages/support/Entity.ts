import EntityContract from '@quarter/contracts/Entity'
import get from 'lodash.get'
import merge from 'lodash.mergewith'
import set from 'lodash.set'

export default class Entity implements EntityContract {
  constructor(protected data: any = {}) {}

  public from(key: string): this {
    // @ts-ignore
    return new this.constructor(this.get(key))
  }

  public get<Value>(key: string, value?: Value): Value {
    return get(this.data, key, value)
  }

  public merge(data: any, strategy = Entity.mergeStrategy) {
    merge(this.data, data, strategy)
    return this
  }

  public set(key: string, value: any) {
    set(this.data, key, value)
    return this
  }

  public static mergeStrategy(a: any, b: any) {
    if (Array.isArray(a)) {
      return a.concat(b)
    }
  }
}
