import Container from './Container'
import Entity from './Entity'

export default interface Driver<Class> {
  (config: Entity, container: Container): Class
}
