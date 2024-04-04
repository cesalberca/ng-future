import { http, HttpResponse } from 'msw'
import { api } from './api'
import { Habit } from '../../app/habits/habit'

export const habitsHandler = [
  http.get<never, never, Habit[]>(api('habits'), () =>
    HttpResponse.json(
      [
        {
          id: '33c6daf1-491f-4ab1-a6dd-e0198e1bef91',
          name: 'Read',
        },
        {
          id: '33c6daf1-491f-4ab1-a6dd-e0198e1bef91',
          name: 'Meditate',
        },
      ],
      {
        status: 200,
      },
    ),
  ),
]
