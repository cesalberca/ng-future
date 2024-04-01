import { http, HttpResponse } from 'msw'
import { api } from './api'

const authAdminUser = {
  email: 'admin@admin.com',
  password: 'admin123',
}
export const authHandler = [
  http.post(api('auth/login'), async ({ request }) => {
    const data = (await request.json()) as { email: string; password: string }
    const email = data.email
    const password = data.password
    if (!email || !password) {
      return new HttpResponse('Missing email or password', { status: 400 })
    }

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
