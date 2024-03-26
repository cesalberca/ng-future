import { Habit } from '../../../../../core/models/habit'

export interface HabitTask {
  habit: Habit
  done: boolean
}
