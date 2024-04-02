import { Injectable } from '@angular/core'
import { AuthRepository } from '../domain/auth.repository'
import { firstValueFrom } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { AuthUser } from '../domain/auth-user'
import { User } from '../domain/user'

@Injectable({
  providedIn: 'root',
})
export class AuthHttpRepository implements AuthRepository {
  constructor(private readonly httpClient: HttpClient) {}
  login(authUser: AuthUser): Promise<User> {
    return firstValueFrom(this.httpClient.post<User>('auth/login', authUser))
  }
}
