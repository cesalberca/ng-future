import { Habit } from './habit'

export interface HabitTaskByDate {
  date: Date
  habitTasks: HabitTask[]
}

interface HabitTask {
  habit: Habit
  done: boolean
}
