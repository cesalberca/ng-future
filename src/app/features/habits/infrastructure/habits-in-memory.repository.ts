import { Injectable, signal } from '@angular/core'
import { CreateHabit } from '../../../core/models/create-habit'
import { Habit } from '../../../core/models/habit'
import { HabitsRepository } from '../domain/habits.repository'
import { Id } from '../../../core/models/id'
import { UpdateHabit } from '../../../core/models/update-habit'

@Injectable({
  providedIn: 'root',
})
export class HabitsInMemoryRepository implements HabitsRepository {
  private readonly habits = signal<Habit[]>([])

  async save(createHabit: CreateHabit): Promise<void> {
    const habits = await this.findAll()
    this.habits.set([...habits, createHabit])
  }

  async update(update: UpdateHabit): Promise<void> {
    this.habits.update(prev => prev.map(habit => (habit.id === update.id ? { ...habit, ...update } : habit)))
  }

  async findAll(): Promise<Habit[]> {
    return this.habits()
  }

  async delete(id: Id): Promise<void> {
    this.habits.update(x => x.filter(y => y.id !== id))
  }
}
