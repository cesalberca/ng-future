import { Inject, Injectable } from '@angular/core'
import { Id } from '../../core/models/id'
import { HabitsRepository } from './habits.repository'
import { InjectionTokens } from '../../core/tokens/injection-tokens'

@Injectable({
  providedIn: 'root',
})
export class HabitsService {
  constructor(@Inject(InjectionTokens.HABITS_REPOSITORY) private readonly habitsRepository: HabitsRepository) {}

  async findAll() {
    return this.habitsRepository.findAll()
  }

  async findOne(id: Id) {
    return this.habitsRepository.findOne(id)
  }
}
