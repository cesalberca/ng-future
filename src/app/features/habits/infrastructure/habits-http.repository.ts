import { Injectable } from '@angular/core'
import { HabitsRepository } from '../domain/habits.repository'
import { CreateHabit } from '../../../core/models/create-habit'
import { Habit } from '../../../core/models/habit'
import { HttpClient } from '@angular/common/http'
import { firstValueFrom } from 'rxjs'
import { Id } from '../../../core/models/id'
import { UpdateHabit } from '../../../core/models/update-habit'

@Injectable({
  providedIn: 'root',
})
export class HabitsHttpRepository implements HabitsRepository {
  constructor(private readonly httpClient: HttpClient) {}

  delete(id: Id): Promise<void> {
    return firstValueFrom(this.httpClient.delete<void>(`habits/${id}`))
  }

  update(update: UpdateHabit): Promise<void> {
    return firstValueFrom(this.httpClient.put<void>(`habits/${update.id}`, update))
  }

  save(createHabit: CreateHabit): Promise<void> {
    return firstValueFrom(this.httpClient.post<void>('habits', createHabit))
  }

  findAll(): Promise<Habit[]> {
    return firstValueFrom(this.httpClient.get<Habit[]>('habits'))
  }
}
