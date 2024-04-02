import { Credentials } from '../../app/features/auth/domain/credentials'

export class AuthMother {
  static admin(): Credentials {
    return {
      email: 'admin@admin.com',
      password: 'admin123',
    }
  }
}
