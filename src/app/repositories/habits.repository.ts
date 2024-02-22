import { CreateHabit } from '../models/create-habit'
import { Habit } from '../models/habit'

export abstract class HabitsRepository {
  abstract save(createHabit: CreateHabit): Promise<void>
  abstract findAll(): Promise<Habit[]>
}
