import { UseCase } from '../use-case'
import { UseCaseOptions } from '../use-case-options'

export interface Middleware {
  intercept(params: unknown, next: UseCase, options: UseCaseOptions): Promise<unknown>
}
