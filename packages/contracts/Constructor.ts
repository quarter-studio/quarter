export default interface Constructor<Class> {
  new (...args: any): Class
}
