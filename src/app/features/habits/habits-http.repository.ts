import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { firstValueFrom } from 'rxjs'
import { Habit } from './habit'
import { Id } from '../../core/models/id'
import { HabitsRepository } from './habits.repository'
import { CreateHabit } from './create-habit/domain/create-habit'

@Injectable({
  providedIn: 'root',
})
export class HabitsHttpRepository implements HabitsRepository {
  constructor(private readonly httpClient: HttpClient) {}

  create(model: CreateHabit): Promise<void> {
    return firstValueFrom(this.httpClient.post<void>('habits', model))
  }

  async findAll() {
    const habits = await firstValueFrom(this.httpClient.get<Habit[]>('habits'))
    return habits
  }

  async findOne(id: Id) {
    const habit = await firstValueFrom(this.httpClient.get<Habit>(`habits/${id}`))
    return habit
  }
}
