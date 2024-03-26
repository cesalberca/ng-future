import { Injectable } from '@angular/core'
import { HabitsRepository } from '../domain/habits.repository'
import { CreateHabit } from '../../../core/models/create-habit'
import { HttpClient } from '@angular/common/http'
import { firstValueFrom } from 'rxjs'
import { Id } from '../../../core/models/id'
import { UpdateHabit } from '../../../core/models/update-habit'

import { HabitTask } from '../features/habit-tasks/domain/habit-task'
import { Habit } from '../../../core/models/habit'
import { DateTime } from '../../../core/datetime/datetime'
import { HabitTasksDto } from './habit-tasks.dto'

@Injectable({
  providedIn: 'root',
})
export class HabitsHttpRepository implements HabitsRepository {
  constructor(private readonly httpClient: HttpClient) {}

  findOne(id: Id): Promise<Habit> {
    return firstValueFrom(this.httpClient.get<Habit>(`habits/${id}`))
  }

  delete(id: Id): Promise<void> {
    return firstValueFrom(this.httpClient.delete<void>(`habits/${id}`))
  }

  update(update: UpdateHabit): Promise<void> {
    return firstValueFrom(this.httpClient.put<void>(`habits/${update.id}`, update))
  }

  save(createHabit: CreateHabit): Promise<void> {
    return firstValueFrom(this.httpClient.post<void>('habits', createHabit))
  }

  async findAll(): Promise<HabitTask[]> {
    const habitTaskByDates = await firstValueFrom(this.httpClient.get<HabitTasksDto[]>('habits'))
    return habitTaskByDates.map(x => ({ ...x, date: DateTime.fromISO(x.date) }))
  }
}
