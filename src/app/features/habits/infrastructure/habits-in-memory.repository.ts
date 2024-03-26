import { Injectable, signal } from '@angular/core'
import { CreateHabit } from '../../../core/models/create-habit'
import { Habit } from '../../../core/models/habit'
import { HabitsRepository } from '../domain/habits.repository'
import { Id } from '../../../core/models/id'
import { UpdateHabit } from '../../../core/models/update-habit'
import { HabitTaskByDate } from '../../../core/models/habits'

@Injectable({
  providedIn: 'root',
})
export class HabitsInMemoryRepository implements HabitsRepository {
  private readonly habits = signal<Habit[]>([])

  async save(createHabit: CreateHabit): Promise<void> {
    const habits: Habit[] = [] //TODO: find all habits
    this.habits.set([...habits, createHabit])
  }

  async update(update: UpdateHabit): Promise<void> {
    this.habits.update(prev => prev.map(habit => (habit.id === update.id ? { ...habit, ...update } : habit)))
  }

  async findAll(): Promise<HabitTaskByDate[]> {
    return []
  }

  async delete(id: Id): Promise<void> {
    this.habits.update(x => x.filter(y => y.id !== id))
  }
}
