import { AuthUser } from '../../app/features/auth/domain/auth-user'

export class AuthMother {
  static admin(): AuthUser {
    return {
      email: 'admin@admin.com',
      password: 'admin123',
    }
  }
}
