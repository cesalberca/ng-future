import { DateTime } from '../../../../../core/datetime/datetime'
import { Habit } from '../../../domain/habit'

export interface HabitTask {
  date: DateTime
  tasks: {
    habit: Habit
    done: boolean
  }[]
}
