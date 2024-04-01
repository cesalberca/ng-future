import { Injectable } from '@angular/core'
import { AuthRepository } from '../domain/auth.repository'
import { firstValueFrom } from 'rxjs'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class AuthHttpRepository implements AuthRepository {
  constructor(private readonly httpClient: HttpClient) {}
  login(email: string, password: string): Promise<unknown> {
    return firstValueFrom(this.httpClient.post('auth/login', { email, password }))
  }
}
