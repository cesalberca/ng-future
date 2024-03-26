import { CreateHabit } from '../../../core/models/create-habit'
import { UpdateHabit } from '../../../core/models/update-habit'
import { CrudRepository } from '../../../core/repositories/crud-repository'
import { HabitTaskByDate } from '../features/habits/domain/habit-task-by-date'
import { Habit } from '../../../core/models/habit'

export interface HabitsRepository extends CrudRepository<CreateHabit, HabitTaskByDate, UpdateHabit, Habit> {}
