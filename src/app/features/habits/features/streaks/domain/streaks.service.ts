import { Injectable } from '@angular/core'
import { Habit } from '../../../../../core/models/habit'
import { Id } from '../../../../../core/models/id'
import { HabitTask } from '../../habit-tasks/domain/habit-task'

@Injectable({
  providedIn: 'root',
})
export class StreaksService {
  constructor() {}

  private createStreaksMap(habits: Habit[]) {
    const streaksMap: { [key: Id]: { habit: Habit; count: number; isStreak: boolean } } = Object.fromEntries(
      habits.map(habit => [habit.id, { habit, count: 0, isStreak: true }]),
    )
    return streaksMap
  }

  calculateStreaks(habitTasks: HabitTask[]) {
    const habits = habitTasks[0]?.tasks.map(({ habit }) => habit) || []
    const streaksMap = this.createStreaksMap(habits)

    habitTasks.forEach(habitTask => {
      habitTask.tasks.forEach(task => {
        if (task.done && streaksMap[task.habit.id].isStreak) {
          streaksMap[task.habit.id] = { ...streaksMap[task.habit.id], count: streaksMap[task.habit.id].count + 1 }
        }
        if (!task.done) {
          streaksMap[task.habit.id] = { ...streaksMap[task.habit.id], isStreak: false }
        }
      })
    })

    const streaks = Object.keys(streaksMap).map(streak => ({
      habit: streaksMap[streak].habit,
      count: streaksMap[streak].count,
    }))
    return streaks
  }
}
