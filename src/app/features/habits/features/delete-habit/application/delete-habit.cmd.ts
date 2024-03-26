import { Inject, Injectable } from '@angular/core'
import { InjectionTokens } from '../../../../../core/tokens/injection-tokens'
import { HabitsRepository } from '../../../domain/habits.repository'
import { Id } from '../../../../../core/models/id'
import { Command } from '../../../../../core/use-case/command'

@Injectable({
  providedIn: 'root',
})
export class DeleteHabitCmd implements Command<{ id: Id }> {
  constructor(@Inject(InjectionTokens.HABITS_REPOSITORY) private readonly habitsRepository: HabitsRepository) {}

  handle({ id }: { id: Id }) {
    return this.habitsRepository.delete(id)
  }
}
