import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly httpClient: HttpClient) {}

  login(email: string, password: string) {
    console.log('sign in', email, password)
    //1. auth repository?
    //2. how to know that the user is logged in? save token or some user data?

    this.httpClient.post('/auth/login', { email, password })
  }

  register(email: string, password: string) {
    console.log('sign up', email, password)
  }

  logout() {
    console.log('logout')
  }
}
