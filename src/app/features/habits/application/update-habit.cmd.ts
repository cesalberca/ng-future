import { Inject, Injectable } from '@angular/core'
import { InjectionTokens } from '../../../core/tokens/injection-tokens'
import { HabitsRepository } from '../domain/habits.repository'
import { Command } from '../../../core/use-case/command'
import { UpdateHabit } from '../../../core/models/update-habit'

@Injectable({
  providedIn: 'root',
})
export class UpdateHabitCmd implements Command<UpdateHabit> {
  constructor(@Inject(InjectionTokens.HABITS_REPOSITORY) private readonly habitsRepository: HabitsRepository) {}

  handle(update: UpdateHabit) {
    return this.habitsRepository.update(update)
  }
}
