import Bootstrapper from './Bootstrapper'

export default interface Provider extends Bootstrapper {
  register(): void
}
