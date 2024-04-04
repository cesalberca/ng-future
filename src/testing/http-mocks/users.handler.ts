import { http, HttpResponse } from 'msw'
import { api } from './api'
import { Id } from '../../app/core/models/id'

interface User {
  id: Id
  name: string
}

const user: User | null = null

export const usersHandler = [
  http.get<never, never, User | null>(api('users'), () => {
    // TODO: Handle with 401
    return HttpResponse.json(user, {
      status: 200,
    })
  }),
]
