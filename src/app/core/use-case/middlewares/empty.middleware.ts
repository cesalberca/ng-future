import { Middleware } from './middleware'
import { UseCase } from '../use-case'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class EmptyMiddleware implements Middleware {
  intercept(params: unknown, next: UseCase): Promise<unknown> {
    return next.handle(params)
  }
}
