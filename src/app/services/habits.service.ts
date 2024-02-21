import { Injectable } from '@angular/core'
import { HabitsRepository } from '../repositories/habits.repository'
import { CreateHabitForm } from '../models/create-habit-form'
import { CreateHabit } from '../models/create-habit'

@Injectable({
  providedIn: 'root',
})
export class HabitsService {
  constructor(private readonly habitsRepository: HabitsRepository) {}

  createHabit(createHabitForm: CreateHabitForm) {
    const createHabit: CreateHabit = {
      id: (Math.random() * 10000).toString(),
      name: createHabitForm.name,
    }
    this.habitsRepository.save(createHabit)
  }
}
