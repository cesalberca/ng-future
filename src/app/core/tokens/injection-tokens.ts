import { InjectionToken } from '@angular/core'
import { HabitsRepository } from '../../features/habits/habits.repository'
import { Middleware } from '../use-case/middlewares/middleware'

export const InjectionTokens = {
  HABITS_REPOSITORY: new InjectionToken<HabitsRepository>('HABITS_REPOSITORY'),
  MIDDLEWARES: new InjectionToken<Middleware>('MIDDLEWARES'),
}
