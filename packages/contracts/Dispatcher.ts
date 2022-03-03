import Listener from './Listener'

export default interface Dispatcher {
  dispatch<Class extends Event>(event: Event): void
  on<Class extends Event>(event: Event, listener: Listener<Class>): Function
}
