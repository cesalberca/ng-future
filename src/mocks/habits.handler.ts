import { http, HttpResponse } from 'msw'
import { Habit } from '../app/core/models/habit'
import { api } from './api'
import { CreateHabit } from '../app/core/models/create-habit'
import { LiveStorage } from '@mswjs/storage'
import { Id } from '../app/core/models/id'

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
  http.delete<{ id: Id }, never, never>(api('habits/:id'), async ({ params }) => {
    const data = params.id

    habits.update(x => x.filter(y => y.id !== data))

    return HttpResponse.json(undefined, {
      status: 204,
    })
  }),
]
