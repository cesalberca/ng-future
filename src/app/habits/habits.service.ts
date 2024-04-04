import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { firstValueFrom } from 'rxjs'
import { Habit } from './habit'

@Injectable({
  providedIn: 'root',
})
export class HabitsService {
  constructor(private readonly httpClient: HttpClient) {}

  async findAll() {
    const habits = await firstValueFrom(this.httpClient.get<Habit[]>('http://localhost:4000/api/habits'))
    return habits
  }
}
