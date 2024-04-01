export interface AuthRepository {
  login(email: string, password: string): Promise<unknown>
}
