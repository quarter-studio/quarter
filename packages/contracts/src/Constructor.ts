export interface Constructor<Class> {
  new (...args: any[]): Class;
}
