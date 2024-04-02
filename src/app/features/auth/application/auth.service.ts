import { Inject, Injectable } from '@angular/core'
import { InjectionTokens } from '../../../core/tokens/injection-tokens'
import { AuthRepository } from '../domain/auth.repository'
import { User } from '../domain/user'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(@Inject(InjectionTokens.AUTH_REPOSITORY) private readonly authRepository: AuthRepository) {}

  login(email: string, password: string): Promise<User> {
    return this.authRepository.login({ email, password })
  }

  register(email: string, password: string) {
    console.log('sign up', email, password)
  }

  logout() {
    console.log('logout')
  }
}
