import { CreateHabit } from '../../../core/models/create-habit'
import { HabitTaskByDate } from '../../../core/models/habits'
import { UpdateHabit } from '../../../core/models/update-habit'
import { CrudRepository } from '../../../core/repositories/crud-repository'

export interface HabitsRepository extends CrudRepository<CreateHabit, HabitTaskByDate, UpdateHabit> {}
