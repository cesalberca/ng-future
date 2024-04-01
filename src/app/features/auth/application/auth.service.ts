import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  login(email: string, password: string) {
    console.log('sign in', email, password)
    //1. auth repository?
    //2. how to know that the user is logged in? save token or some user data?
  }

  register(email: string, password: string) {
    console.log('sign up', email, password)
  }

  logout() {
    console.log('logout')
  }
}
