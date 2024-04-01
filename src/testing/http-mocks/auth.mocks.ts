import { http, HttpResponse } from 'msw'
import { api } from './api'

export const authHandler = [
  http.post(api('auth/login'), async ({ request }) => {
    const data = await request.json()
    console.log(data)
    return new HttpResponse(null, {
      // headers: {
      //   'Set-Cookie': 'authToken=abc-123',
      // },
    })
  }),
]
