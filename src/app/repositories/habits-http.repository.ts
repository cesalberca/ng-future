import { Injectable } from '@angular/core'
import { HabitsRepository } from './habits.repository'
import { CreateHabit } from '../models/create-habit'
import { Habit } from '../models/habit'
import { HttpClient } from '@angular/common/http'
import { firstValueFrom } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class HabitsHttpRepository extends HabitsRepository {
  constructor(private readonly httpClient: HttpClient) {
    super()
  }

  save(createHabit: CreateHabit): Promise<void> {
    return firstValueFrom(this.httpClient.post<void>('habits', createHabit))
  }

  findAll(): Promise<Habit[]> {
    return firstValueFrom(this.httpClient.get<Habit[]>('habits'))
  }
}
