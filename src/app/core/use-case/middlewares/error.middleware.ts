import { EventEmitter } from '../../event-emitter/event-emitter'
import { Events } from '../../event-emitter/events'
import { UseCase } from '../use-case'
import { Middleware } from './middleware'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class ErrorMiddleware implements Middleware {
  constructor(private readonly eventEmitter: EventEmitter) {}

  async intercept(params: unknown, next: UseCase): Promise<unknown> {
    try {
      const result = await next.handle(params)
      return result
    } catch (error) {
      this.eventEmitter.dispatch(Events.ERROR, error)
      throw error
    }
  }
}
