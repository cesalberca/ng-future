import { Id } from '../models/id'

export interface FindableOne<Return> {
  findOne(id: Id): Promise<Return>
}
