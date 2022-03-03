export interface Container {
  alias(alias: any, key: any): void;
  bind(key: any, build: Function, shared: boolean): void;
  build<Class>(key: any, args: any[]): Class;
  make<Class>(key: any, ...args: any[]): Class;
  provide(key: any, instance: any): void;
  share(key: any, build: Function): void;
}
