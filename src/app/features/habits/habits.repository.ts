import { Habit } from './habit'
import { Id } from '../../core/models/id'
import { CreateHabit } from './habit-create/domain/create-habit'

export interface HabitsRepository {
  findAll(): Promise<Habit[]>
  findOne(id: Id): Promise<Habit>
  create(model: CreateHabit): Promise<void>
}
