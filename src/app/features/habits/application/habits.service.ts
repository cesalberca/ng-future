import { Inject, Injectable } from '@angular/core'
import { CreateHabitFormModel } from '../../../core/models/create-habit-form-model'
import { CreateHabit } from '../../../core/models/create-habit'
import { Habit } from '../../../core/models/habit'
import { HabitsRepository } from '../domain/habits.repository'
import { Id } from '../../../core/models/id'
import { UuidService } from '../../../core/crypto/uuid.service'
import { InjectionTokens } from '../../../core/tokens/injection-tokens'

@Injectable({
  providedIn: 'root',
})
export class HabitsService {
  constructor(
    @Inject(InjectionTokens.HABITS_REPOSITORY) private readonly habitsRepository: HabitsRepository,
    private readonly uuidService: UuidService,
  ) {}

  async getHabit(id: Id): Promise<Habit | undefined> {
    return this.habitsRepository.findOne(id)
  }

  async createHabit(createHabitForm: CreateHabitFormModel) {
    const createHabit: CreateHabit = {
      id: this.uuidService.generate(),
      name: createHabitForm.name,
    }
    await this.habitsRepository.save(createHabit)
  }
}
