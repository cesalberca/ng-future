import { Injectable, signal } from '@angular/core'
import { CreateHabitFormModel } from '../../../core/models/create-habit-form-model'
import { CreateHabit } from '../../../core/models/create-habit'
import { Habit } from '../../../core/models/habit'
import { HabitsRepository } from '../domain/habits.repository'
import { Id } from '../../../core/models/id'
import { UuidService } from '../../../core/crypto/uuid.service'

@Injectable({
  providedIn: 'root',
})
export class HabitsService {
  habits = signal<Habit[]>([])

  constructor(
    private readonly habitsRepository: HabitsRepository,
    private readonly uuidService: UuidService,
  ) {}

  async loadHabits(): Promise<void> {
    const habits = await this.habitsRepository.findAll()
    this.habits.set(habits)
  }

  async getHabit(id: Id): Promise<Habit | undefined> {
    const habits = await this.habitsRepository.findAll()
    return habits.find(x => x.id === id)
  }

  async createHabit(createHabitForm: CreateHabitFormModel) {
    const createHabit: CreateHabit = {
      id: this.uuidService.generate(),
      name: createHabitForm.name,
    }
    await this.habitsRepository.save(createHabit)
  }
}
