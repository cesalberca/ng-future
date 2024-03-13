import { http, HttpResponse } from 'msw'
import { Habit } from '../app/core/models/habit'
import { environment } from '../environments/environment'

export const handlers = [
  http.get<never, never, Habit[]>(`${environment.apiBaseUrl}/habits`, () => {
    const body: Habit[] = [
      {
        name: 'foo',
        id: 'bar',
      },
    ]
    return HttpResponse.json(body, {
      status: 200,
    })
  }),
]
