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
    let message = options.message?.title ?? ''

    if (options.message?.description) {
      message += '\n' + options.message.description
    }

    alert(message)
    return result
  }
}
