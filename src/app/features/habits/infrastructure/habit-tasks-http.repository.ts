import { Injectable } from '@angular/core'
import { firstValueFrom } from 'rxjs'
import { HabitTasksRepository } from '../domain/habit-tasks.repository'
import { HabitTask } from '../features/habit-tasks/domain/habit-task'
import { HabitTasksDto } from './habit-tasks.dto'
import { HttpClient } from '@angular/common/http'
import { DateTime } from '../../../core/datetime/datetime'

@Injectable({
  providedIn: 'root',
})
export class HabitTasksHttpRepository implements HabitTasksRepository {
  constructor(private readonly httpClient: HttpClient) {}
  async findAll(): Promise<HabitTask[]> {
    const habitTaskByDates = await firstValueFrom(this.httpClient.get<HabitTasksDto[]>('habit-tasks'))
    return habitTaskByDates.map(x => ({ ...x, date: DateTime.fromISO(x.date) }))
  }
}
