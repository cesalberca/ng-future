import { CreateHabit } from '../../../core/models/create-habit'
import { Habit } from '../../../core/models/habit'
import { CrudRepository } from '../../../core/repositories/crud-repository'

export interface HabitsRepository extends CrudRepository<CreateHabit, Habit> {}
