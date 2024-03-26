import { DateTime } from '../../../../../core/datetime/datetime'
import { Habit } from '../../../../../core/models/habit'

export interface HabitTaskByDate {
  date: DateTime
  habitTasks: {
    habit: Habit
    done: boolean
  }[]
}
