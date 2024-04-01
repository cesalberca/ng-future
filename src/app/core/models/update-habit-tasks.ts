import { DateTime } from '../datetime/datetime'
import { Habit } from './habit'

export type UpdateHabitTasks = {
  date: DateTime
  updatedTask: { habit: Habit; done: boolean }
}
