import { http, HttpResponse } from 'msw'
import { User } from '../../app/core/models/user'
import { api } from './api'

const user: User | null = null

export const usersHandler = [
  http.get<never, never, User | null>(api('users'), () => {
    // TODO: Handle with 401
    return HttpResponse.json(user, {
      status: 200,
    })
  }),
]
