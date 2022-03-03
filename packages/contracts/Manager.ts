import Driver from './Driver'

export default interface Manager<Class> {
  register(key: any, driver: Driver<Class>): void
  resolve(key: any): Class
}
