import { Injectable } from '@angular/core'
import { firstValueFrom } from 'rxjs'
import { HabitTasksRepository } from '../domain/habit-tasks.repository'
import { HabitTask } from '../features/habit-tasks/domain/habit-task'
import { HabitTasksDto } from './habit-tasks.dto'
import { HttpClient } from '@angular/common/http'
import { DateTime } from '../../../core/datetime/datetime'
import { UpdateHabitTasks } from '../../../core/models/update-habit-tasks'

@Injectable({
  providedIn: 'root',
})
export class HabitTasksHttpRepository implements HabitTasksRepository {
  constructor(private readonly httpClient: HttpClient) {}
  async update(update: UpdateHabitTasks): Promise<HabitTask[]> {
    const habitTasksDto = await firstValueFrom(
      this.httpClient.put<HabitTasksDto[]>(`habit-tasks/${update.updatedTask.habit.id}`, {
        ...update,
        date: update.date.toISO(),
      }),
    )
    return habitTasksDto.map(x => ({ ...x, date: DateTime.fromISO(x.date) }))
  }
  async findAll(): Promise<HabitTask[]> {
    const habitTaskByDates = await firstValueFrom(this.httpClient.get<HabitTasksDto[]>('habit-tasks'))
    return habitTaskByDates.map(x => ({ ...x, date: DateTime.fromISO(x.date) }))
  }
}
