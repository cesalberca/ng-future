import { http, HttpResponse } from 'msw'
import { Habit } from '../app/core/models/habit'
import { api } from './api'
import { CreateHabit } from '../app/core/models/create-habit'
import { LiveStorage } from '@mswjs/storage'

const habits = new LiveStorage<Habit[]>('habits', [
  {
    id: '33c6daf1-491f-4ab1-a6dd-e0198e1bef91',
    name: 'Read',
  },
])

export const habitsHandler = [
  http.get<never, never, Habit[]>(api('habits'), () =>
    HttpResponse.json(habits.getValue(), {
      status: 200,
    }),
  ),
  http.post<CreateHabit, never, Habit>(api('habits'), async ({ request }) => {
    const data = await request.json()
    habits.update(x => [...x, data])
    return HttpResponse.json(data, {
      status: 200,
    })
  }),
]
