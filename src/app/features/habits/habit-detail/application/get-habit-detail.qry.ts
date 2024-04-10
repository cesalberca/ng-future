import { Inject, Injectable } from '@angular/core'
import { Query } from '../../../../core/use-case/query'
import { InjectionTokens } from '../../../../core/tokens/injection-tokens'
import { HabitsRepository } from '../../habits.repository'
import { Habit } from '../../habit'
import { Id } from '../../../../core/models/id'

@Injectable({
  providedIn: 'root',
})
export class GetHabitDetailQry implements Query<Habit, Id> {
  constructor(@Inject(InjectionTokens.HABITS_REPOSITORY) private readonly habitsRepository: HabitsRepository) {}

  handle(id: Id): Promise<Habit> {
    return this.habitsRepository.findOne(id)
  }
}
