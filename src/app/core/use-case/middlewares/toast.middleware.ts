import { UseCase } from '../use-case'
import { Middleware } from './middleware'
import { Injectable } from '@angular/core'
import { UseCaseOptions } from '../use-case-options'

@Injectable({
  providedIn: 'root',
})
export class ToastMiddleware implements Middleware {
  async intercept(params: unknown, next: UseCase, options: UseCaseOptions): Promise<unknown> {
    const result = await next.handle(params)
    alert(options.message?.title + '\n' + options.message?.description)
    return result
  }
}
