import { Inject, Injectable } from '@angular/core'
import { Query } from '../../../../core/use-case/query'
import { InjectionTokens } from '../../../../core/tokens/injection-tokens'
import { HabitsRepository } from '../../habits.repository'
import { Habit } from '../../habit'

@Injectable({
  providedIn: 'root',
})
export class GetHabitsQry implements Query<Habit[]> {
  constructor(@Inject(InjectionTokens.HABITS_REPOSITORY) private readonly habitsRepository: HabitsRepository) {}

  handle(): Promise<Habit[]> {
    return this.habitsRepository.findAll()
  }
}
