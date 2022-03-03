import { Event } from "./Event";

export interface Listener<Class extends Event> {
  (event: Class): void;
}
