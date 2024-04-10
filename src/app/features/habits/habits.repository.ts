import { Habit } from './habit'
import { Id } from '../../core/models/id'
import { HabitCreate } from './habit-create/domain/habit-create'

export interface HabitsRepository {
  findAll(): Promise<Habit[]>
  findOne(id: Id): Promise<Habit>
  create(model: HabitCreate): Promise<void>
}
