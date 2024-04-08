import { InjectionToken } from '@angular/core'
import { HabitsRepository } from '../../features/habits/habits.repository'

export const InjectionTokens = {
  HABITS_REPOSITORY: new InjectionToken<HabitsRepository>('HABITS_REPOSITORY'),
}
