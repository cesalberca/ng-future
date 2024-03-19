import { Id } from '../models/id'

export interface CrudRepository<In, Out> {
  save(elem: In): Promise<void>
  findAll(): Promise<Out>
  delete(id: Id): Promise<void>
}
