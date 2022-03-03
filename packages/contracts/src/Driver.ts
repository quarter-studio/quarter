import { Container } from "./Container";
import { Entity } from "./Entity";

export interface Driver<Class> {
  (config: Entity, container: Container): Class;
}
