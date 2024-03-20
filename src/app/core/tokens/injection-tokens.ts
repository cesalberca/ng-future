import { InjectionToken } from '@angular/core'
import { HabitsRepository } from '../../features/habits/domain/habits.repository'
import { Middleware } from '../use-case/middlewares/middleware'

export const InjectionTokens = {
  STORAGE: new InjectionToken<Storage>('STORAGE'),
  HABITS_REPOSITORY: new InjectionToken<HabitsRepository>('HABITS_REPOSITORY'),
  MIDDLEWARES: new InjectionToken<Middleware>('MIDDLEWARES'),
}
