import { AuthUser } from './auth-user'
import { User } from './user'

export interface AuthRepository {
  login(authUser: AuthUser): Promise<User>
}
