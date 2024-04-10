import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { firstValueFrom } from 'rxjs'
import { Habit } from './habit'
import { Id } from '../../core/models/id'
import { HabitsRepository } from './habits.repository'
import { HabitCreate } from './habit-create/domain/habit-create'

@Injectable({
  providedIn: 'root',
})
export class HabitsHttpRepository implements HabitsRepository {
  constructor(private readonly httpClient: HttpClient) {}

  create(model: HabitCreate): Promise<void> {
    return firstValueFrom(this.httpClient.post<void>('habits', model))
  }

  findAll() {
    return firstValueFrom(this.httpClient.get<Habit[]>('habits'))
  }

  findOne(id: Id) {
    return firstValueFrom(this.httpClient.get<Habit>(`habits/${id}`))
  }

  delete(id: Id): Promise<void> {
    return firstValueFrom(this.httpClient.delete<void>(`habits/${id}`))
  }
}
