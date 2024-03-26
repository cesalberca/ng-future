import { DateTime } from '../../../../../core/datetime/datetime'
import { Habit } from '../../../../../core/models/habit'

export interface HabitTask {
  date: DateTime
  tasks: {
    habit: Habit
    done: boolean
  }[]
}
