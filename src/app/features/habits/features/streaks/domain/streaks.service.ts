import { Injectable } from '@angular/core'
import { Habit } from '../../../domain/habit'
import { Id } from '../../../../../core/models/id'
import { HabitTask } from '../../habit-tasks/domain/habit-task'

type StreaksMap = { [key: Id]: { habit: Habit; count: number; isStreak: boolean } }

@Injectable({
  providedIn: 'root',
})
export class StreaksService {
  constructor() {}

  private createStreaksMap(habits: Habit[]) {
    const streaksMap: StreaksMap = Object.fromEntries(
      habits.map(habit => [habit.id, { habit, count: 0, isStreak: true }]),
    )
    return streaksMap
  }

  private composeStreaksMap(streaksMap: StreaksMap, habitTasks: HabitTask[]) {
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
    return streaksMap
  }

  private getStreaksFromStreaksMap(streaksMap: StreaksMap) {
    const streaks = Object.keys(streaksMap).map(streak => ({
      habit: streaksMap[streak].habit,
      count: streaksMap[streak].count,
    }))
    return streaks
  }

  calculateStreaks(habitTasks: HabitTask[]) {
    const habits: Habit[] = habitTasks[0]?.tasks.map(({ habit }) => habit) || []
    const streaksMap = this.composeStreaksMap(this.createStreaksMap(habits), habitTasks)
    const streaks = this.getStreaksFromStreaksMap(streaksMap)
    return streaks
  }

  streakCountToString(count: number) {
    if (count === 1) return `${count} día`
    if (count < 7) return `${count} días`
    if (count < 30 && Math.floor(count / 7) === 1) return `${Math.floor(count / 7)} semana`
    if (count < 30 && Math.floor(count / 7) > 1) return `${Math.floor(count / 7)} semanas`
    if (count < 365 && Math.floor(count / 30) === 1) return `${Math.floor(count / 30)} mes`
    if (count < 365 && Math.floor(count / 30) > 1) return `${Math.floor(count / 30)} meses`
    if (Math.floor(count / 365) === 1) return `${Math.floor(count / 365)} año`
    return `${Math.floor(count / 365)} años`
  }
}
