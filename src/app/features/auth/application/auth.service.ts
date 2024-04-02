import { Inject, Injectable } from '@angular/core'
import { InjectionTokens } from '../../../core/tokens/injection-tokens'
import { AuthRepository } from '../domain/auth.repository'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(@Inject(InjectionTokens.AUTH_REPOSITORY) private readonly authRepository: AuthRepository) {}

  login(email: string, password: string) {
    return this.authRepository.login({ email, password })
  }

  register(email: string, password: string) {
    console.log('sign up', email, password)
  }

  logout() {
    console.log('logout')
  }
}
