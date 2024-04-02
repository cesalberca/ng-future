import { http, HttpResponse } from 'msw'
import { api } from './api'
import { AuthMother } from '../mothers/auth.mother'
import { AuthUser } from '../../app/features/auth/domain/auth-user'

export const authHandler = [
  http.post<never, AuthUser>(api('auth/login'), async ({ request }) => {
    const data = await request.json()
    const email = data.email
    const password = data.password
    if (!email || !password) {
      return new HttpResponse('Missing email or password', { status: 400 })
    }

    const authAdminUser = AuthMother.admin()
    if (email !== authAdminUser.email || password !== authAdminUser.password) {
      return new HttpResponse('Invalid Email or Password', { status: 401 })
    }

    return new HttpResponse(null, {
      // headers: {
      //   'Set-Cookie': 'authToken=abc-123',
      // },
    })
  }),
]
