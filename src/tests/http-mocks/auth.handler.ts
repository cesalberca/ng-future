import { http, HttpResponse } from 'msw'
import { api } from './api'
import { AuthMother } from '../mothers/auth.mother'
import { User } from '../../app/features/auth/domain/user'
import { Credentials } from '../../app/features/auth/domain/credentials'

export const AUTH_TOKEN_KEY = 'authToken'
export const authHandler = [
  http.post<never, Credentials, User>(api('auth/login'), async ({ request }) => {
    const data = await request.json()
    const email = data.email
    const password = data.password
    if (!email || !password) {
      throw new HttpResponse('Missing email or password', { status: 400 })
    }

    const authAdminUser = AuthMother.admin()
    if (email !== authAdminUser.email || password !== authAdminUser.password) {
      throw new HttpResponse('Invalid Email or Password', { status: 401 })
    }

    return HttpResponse.json(
      { email },
      {
        status: 200,
        headers: {
          'Set-Cookie': `${AUTH_TOKEN_KEY}=abc-123`,
        },
      },
    )
  }),
]
