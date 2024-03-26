import { HabitTask } from './habit-task'
import { DateTime } from '../../../../../core/datetime/datetime'

export interface HabitTaskByDate {
  date: DateTime
  habitTasks: HabitTask[]
}
