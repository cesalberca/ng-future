import { Query } from '../../../../../core/use-case/query'
import { Inject, Injectable } from '@angular/core'
import { InjectionTokens } from '../../../../../core/tokens/injection-tokens'
import { Habit } from '../../../domain/habit'
import { HabitsRepository } from '../../../domain/habits.repository'
import { Id } from '../../../../../core/models/id'

@Injectable({
  providedIn: 'root',
})
export class GetHabitQry implements Query<Habit, Id> {
  constructor(@Inject(InjectionTokens.HABITS_REPOSITORY) private readonly habitsRepository: HabitsRepository) {}

  handle(id: Id): Promise<Habit> {
    return this.habitsRepository.findOne(id)
  }
}
