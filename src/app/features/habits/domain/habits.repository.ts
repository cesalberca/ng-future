import { CreateHabit } from '../../../core/models/create-habit'
import { UpdateHabit } from '../../../core/models/update-habit'
import { CrudRepository } from '../../../core/repositories/crud-repository'
import { Habit } from '../../../core/models/habit'

export interface HabitsRepository extends CrudRepository<CreateHabit, Habit, UpdateHabit, Habit> {}
