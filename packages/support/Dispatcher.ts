import DispatcherContract from '@quarter/contracts/Dispatcher'
import Event from '@quarter/contracts/Event'
import Listener from '@quarter/contracts/Listener'

export default class Dispatcher implements DispatcherContract {
  protected listeners = new Map()

  public dispatch(event: Event) {
    this.callbacks(event.type).forEach((callback) => {
      callback(event)
    })
  }

  public on<Class extends Event>(event: Class, listener: Listener<Class>) {
    const callbacks = this.callbacks(event.type)
    callbacks.add(listener)
    return () => callbacks.delete(listener)
  }

  private callbacks(key: string): Set<any> {
    if (!this.listeners.has(key)) {
      this.listeners.set(key, new Set())
    }

    return this.listeners.get(key)
  }
}
