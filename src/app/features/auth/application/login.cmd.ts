import { Inject, Injectable } from '@angular/core'
import { InjectionTokens } from '../../../core/tokens/injection-tokens'
import { AuthRepository } from '../domain/auth.repository'
import { User } from '../domain/user'
import { Command } from '../../../core/use-case/command'
import { Credentials } from '../domain/credentials'
import { InvalidCredentialsError } from '../domain/invalid-credentials.error'

@Injectable({
  providedIn: 'root',
})
export class LoginCmd implements Command<Credentials, User> {
  constructor(@Inject(InjectionTokens.AUTH_REPOSITORY) private readonly authRepository: AuthRepository) {}

  handle(credentials: Credentials): Promise<User> {
    try {
      return this.authRepository.login(credentials)
    } catch (e) {
      throw new InvalidCredentialsError()
    }
  }
}
