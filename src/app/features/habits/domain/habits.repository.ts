import { CreateHabit } from '../../../core/models/create-habit'
import { UpdateHabit } from '../../../core/models/update-habit'
import { CrudRepository } from '../../../core/repositories/crud-repository'
import { HabitTask } from '../features/habit-tasks/domain/habit-task'
import { Habit } from '../../../core/models/habit'

export interface HabitsRepository extends CrudRepository<CreateHabit, HabitTask, UpdateHabit, Habit> {}
