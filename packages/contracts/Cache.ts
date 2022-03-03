export default interface Cache {
  delete(key: string): Promise<void>
  get<Class>(key: string, expiration: number | Date, resolve: () => Promise<Class>): Promise<Class>
  set(key: string, expiration: number | Date, value: any): Promise<void>
}
