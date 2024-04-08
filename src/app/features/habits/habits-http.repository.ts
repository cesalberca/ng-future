import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { firstValueFrom } from 'rxjs'
import { Habit } from './habit'
import { Id } from '../../core/models/id'
import { HabitsRepository } from './habits.repository'

@Injectable({
  providedIn: 'root',
})
export class HabitsHttpRepository implements HabitsRepository {
  constructor(private readonly httpClient: HttpClient) {}

  async findAll() {
    const habits = await firstValueFrom(this.httpClient.get<Habit[]>('habits'))
    return habits
  }

  async findOne(id: Id) {
    const habit = await firstValueFrom(this.httpClient.get<Habit>(`habits/${id}`))
    return habit
  }
}
