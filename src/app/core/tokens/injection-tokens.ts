import { InjectionToken } from '@angular/core'
import { HabitsRepository } from '../../features/habits/domain/habits.repository'
import { Middleware } from '../use-case/middlewares/middleware'
import { HabitTasksRepository } from '../../features/habits/domain/habit-tasks.repository'
import { AuthRepository } from '../../features/auth/domain/auth.repository'

export const InjectionTokens = {
  STORAGE: new InjectionToken<Storage>('STORAGE'),
  AUTH_REPOSITORY: new InjectionToken<AuthRepository>('AUTH_REPOSITORY'),
  HABITS_REPOSITORY: new InjectionToken<HabitsRepository>('HABITS_REPOSITORY'),
  HABIT_TASKS_REPOSITORY: new InjectionToken<HabitTasksRepository>('HABIT_TASKS_REPOSITORY'),
  MIDDLEWARES: new InjectionToken<Middleware>('MIDDLEWARES'),
}
