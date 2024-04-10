import { Inject, Injectable } from '@angular/core'
import { Id } from '../../core/models/id'
import { HabitsRepository } from './habits.repository'
import { InjectionTokens } from '../../core/tokens/injection-tokens'
import { UuidService } from '../../core/crypto/uuid.service'
import { HabitCreateFormModel } from './habit-create/domain/habit-create-form-model'

@Injectable({
  providedIn: 'root',
})
export class HabitsService {
  constructor(
    @Inject(InjectionTokens.HABITS_REPOSITORY) private readonly habitsRepository: HabitsRepository,
    private readonly uuidService: UuidService,
  ) {}

  async findAll() {
    return this.habitsRepository.findAll()
  }

  async findOne(id: Id) {
    return this.habitsRepository.findOne(id)
  }

  async create(model: HabitCreateFormModel) {
    return this.habitsRepository.create({
      name: model.name,
      id: this.uuidService.generate(),
    })
  }
}
