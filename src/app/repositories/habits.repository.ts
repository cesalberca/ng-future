import { Inject, Injectable } from '@angular/core'
import { InjectionTokens } from '../tokens/injection-tokens'
import { CreateHabit } from '../models/create-habit'
import { Habit } from '../models/habit'

@Injectable({
  providedIn: 'root',
})
export class HabitsRepository {
  constructor(@Inject(InjectionTokens.STORAGE) private readonly storage: Storage) {}

  private readonly STORAGE_KEY = 'habits'

  async save(createHabit: CreateHabit): Promise<void> {
    const habits = await this.findAll()
    this.storage.setItem(this.STORAGE_KEY, JSON.stringify([...habits, createHabit]))
  }

  async findAll(): Promise<Habit[]> {
    return JSON.parse(this.storage.getItem(this.STORAGE_KEY) ?? '[]')
  }
}
