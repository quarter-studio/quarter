export default interface Entity {
  from(key: string): this
  get<Value>(key: string, value?: Value): Value
  merge(data: any, strategy: (a: any, b: any) => any): this
  set(key: string, value: any): this
}
