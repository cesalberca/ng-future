import { CreateHabit } from '../../../core/models/create-habit'
import { Habit } from '../../../core/models/habit'

export abstract class HabitsRepository {
  abstract save(createHabit: CreateHabit): Promise<void>
  abstract findAll(): Promise<Habit[]>
}
