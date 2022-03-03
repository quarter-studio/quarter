import { Driver } from "./Driver";

export interface Manager<Class> {
  register(key: any, driver: Driver<Class>): void;
  resolve(key: any): Class;
}
