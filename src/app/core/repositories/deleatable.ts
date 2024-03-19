import { Id } from '../models/id'

export interface Deleatable {
  delete(id: Id): Promise<void>
}
