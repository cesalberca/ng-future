import { Injectable } from '@angular/core'
import { AuthRepository } from '../domain/auth.repository'
import { firstValueFrom } from 'rxjs'
import { HttpClient, HttpErrorResponse, HttpStatusCode } from '@angular/common/http'
import { User } from '../domain/user'
import { Credentials } from '../domain/credentials'
import { InvalidCredentialsError } from '../domain/invalid-credentials.error'

@Injectable({
  providedIn: 'root',
})
export class AuthHttpRepository implements AuthRepository {
  constructor(private readonly httpClient: HttpClient) {}

  async login(authUser: Credentials): Promise<User> {
    try {
      const response = await firstValueFrom(this.httpClient.post<User>('auth/login', authUser, { observe: 'response' }))
      return response.body!
    } catch (e) {
      if (e instanceof HttpErrorResponse) {
        if (e.status === HttpStatusCode.Unauthorized) {
          throw new InvalidCredentialsError()
        }
      }

      throw e
    }
  }
}
