import { Injectable, signal } from '@angular/core'
import { CreateHabitFormModel } from '../models/create-habit-form-model'
import { CreateHabit } from '../models/create-habit'
import { Habit } from '../models/habit'
import { HabitsRepository } from '../repositories/habits.repository'

@Injectable({
  providedIn: 'root',
})
export class HabitsService {
  habits = signal<Habit[]>([])

  constructor(private readonly habitsRepository: HabitsRepository) {
    this.loadHabits()
  }

  async loadHabits(): Promise<void> {
    const habits = await this.habitsRepository.findAll()
    this.habits.set(habits)
  }

  async createHabit(createHabitForm: CreateHabitFormModel) {
    const createHabit: CreateHabit = {
      id: (Math.random() * 10000).toString(),
      name: createHabitForm.name,
    }
    await this.habitsRepository.save(createHabit)
    this.loadHabits()
  }
}
