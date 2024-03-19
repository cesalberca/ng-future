import { InjectionToken } from '@angular/core'
import { HabitsRepository } from '../../features/habits/domain/habits.repository'

export const InjectionTokens = {
  STORAGE: new InjectionToken<Storage>('STORAGE'),
  HABITS_REPOSITORY: new InjectionToken<HabitsRepository>('HABITS_REPOSITORY'),
}
