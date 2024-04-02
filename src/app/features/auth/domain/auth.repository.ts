import { User } from './user'
import { Credentials } from './credentials'

export interface AuthRepository {
  login(credentials: Credentials): Promise<User>
}
