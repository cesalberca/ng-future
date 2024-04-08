import { Habit } from './habit'
import { Id } from '../../core/models/id'

export interface HabitsRepository {
  findAll(): Promise<Habit[]>
  findOne(id: Id): Promise<Habit>
}
