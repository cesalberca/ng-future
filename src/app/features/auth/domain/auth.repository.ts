import { AuthUser } from './auth-user'

export interface AuthRepository {
  login(authUser: AuthUser): Promise<unknown>
}
