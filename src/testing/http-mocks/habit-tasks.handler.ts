import { http, HttpResponse } from 'msw'
import { api } from './api'
import { LiveStorage } from '@mswjs/storage'
import { HabitTasksDtoMother } from '../../app/features/habits/infrastructure/habit-tasks-dto.mother'
import { HabitTasksDto } from '../../app/features/habits/infrastructure/habit-tasks.dto'

const habitTasks = new LiveStorage<HabitTasksDto[]>('habitTasks', HabitTasksDtoMother.habitTasksDto())

export const habitTasksHandler = [
  http.get<never, never, HabitTasksDto[]>(api('habit-tasks'), () =>
    HttpResponse.json(habitTasks.getValue(), {
      status: 200,
    }),
  ),
]
