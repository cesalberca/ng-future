import { Inject, Injectable } from '@angular/core'
import { Command } from '../../../../core/use-case/command'
import { Id } from '../../../../core/models/id'
import { InjectionTokens } from '../../../../core/tokens/injection-tokens'
import { HabitsRepository } from '../../habits.repository'

@Injectable({
  providedIn: 'root',
})
export class DeleteHabitCmd implements Command<{ id: Id }> {
  constructor(@Inject(InjectionTokens.HABITS_REPOSITORY) private readonly habitsRepository: HabitsRepository) {}

  handle({ id }: { id: Id }) {
    return this.habitsRepository.delete(id)
  }
}
