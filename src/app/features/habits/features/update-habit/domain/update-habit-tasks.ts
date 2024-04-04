import { DateTime } from '../../../../../core/datetime/datetime'
import { Habit } from '../../../domain/habit'

export type UpdateHabitTasks = {
  date: DateTime
  updatedTask: { habit: Habit; done: boolean }
}
