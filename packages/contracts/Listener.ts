import Event from './Event'

export default interface Listener<Class extends Event> {
  (event: Class): void
}
