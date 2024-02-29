import { Inject, Injectable } from '@angular/core'
import { InjectionTokens } from '../../../core/tokens/injection-tokens'
import { CreateHabit } from '../../../core/models/create-habit'
import { Habit } from '../../../core/models/habit'
import { HabitsRepository } from '../domain/habits.repository'

@Injectable({
  providedIn: 'root',
})
export class HabitsLocalStorageRepository extends HabitsRepository {
  constructor(@Inject(InjectionTokens.STORAGE) private readonly storage: Storage) {
    super()
  }

  private readonly STORAGE_KEY = 'habits'

  async save(createHabit: CreateHabit): Promise<void> {
    const habits = await this.findAll()
    this.storage.setItem(this.STORAGE_KEY, JSON.stringify([...habits, createHabit]))
  }

  async findAll(): Promise<Habit[]> {
    return JSON.parse(this.storage.getItem(this.STORAGE_KEY) ?? '[]')
  }
}
