import { Injectable, signal } from '@angular/core'
import { CreateHabit } from '../../../core/models/create-habit'
import { Habit } from '../../../core/models/habit'
import { HabitsRepository } from '../domain/habits.repository'

@Injectable({
  providedIn: 'root',
})
export class HabitsInMemoryRepository extends HabitsRepository {
  private readonly habits = signal<Habit[]>([])

  async save(createHabit: CreateHabit): Promise<void> {
    const habits = await this.findAll()
    this.habits.set([...habits, createHabit])
  }

  async findAll(): Promise<Habit[]> {
    return this.habits()
  }
}
