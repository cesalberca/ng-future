import { Inject, Injectable } from '@angular/core'
import { InjectionTokens } from '../../../../core/tokens/injection-tokens'
import { HabitsRepository } from '../../habits.repository'
import { Command } from '../../../../core/use-case/command'
import { UuidService } from '../../../../core/crypto/uuid.service'
import { HabitCreateFormModel } from '../domain/habit-create-form-model'

@Injectable({
  providedIn: 'root',
})
export class HabitCreateCmd implements Command<HabitCreateFormModel> {
  constructor(
    @Inject(InjectionTokens.HABITS_REPOSITORY) private readonly habitsRepository: HabitsRepository,
    private readonly uuidService: UuidService,
  ) {}

  handle(createHabit: HabitCreateFormModel): Promise<void> {
    const id = this.uuidService.generate()
    return this.habitsRepository.create({ id, ...createHabit })
  }
}
