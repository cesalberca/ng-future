import { Inject, Injectable } from '@angular/core'
import { InjectionTokens } from '../../../../../core/tokens/injection-tokens'
import { HabitsRepository } from '../../../domain/habits.repository'
import { Command } from '../../../../../core/use-case/command'
import { CreateHabit } from '../domain/create-habit'
import { CreateHabitFormModel } from '../domain/create-habit-form-model'
import { UuidService } from '../../../../../core/crypto/uuid.service'

@Injectable({
  providedIn: 'root',
})
export class CreateHabitCmd implements Command<CreateHabitFormModel> {
  constructor(
    @Inject(InjectionTokens.HABITS_REPOSITORY) private readonly habitsRepository: HabitsRepository,
    private readonly uuidService: UuidService,
  ) {}

  async handle(model: CreateHabitFormModel): Promise<void> {
    const createHabit: CreateHabit = {
      id: this.uuidService.generate(),
      name: model.name,
    }
    return this.habitsRepository.save(createHabit)
  }
}
