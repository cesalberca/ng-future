import { CreateHabit } from '../features/create-habit/domain/create-habit'
import { UpdateHabit } from '../features/update-habit/domain/update-habit'
import { CrudRepository } from '../../../core/repositories/crud-repository'
import { Habit } from './habit'

export interface HabitsRepository extends CrudRepository<CreateHabit, Habit, UpdateHabit, Habit> {}
