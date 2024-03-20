import { UseCase } from './use-case'
import { Middleware } from './middlewares/middleware'
import { UseCaseHandler } from './use-case-handler'
import { UseCaseOptions } from './use-case-options'
import { InjectionTokens } from '../tokens/injection-tokens'
import { Type } from '../type/type'
import { inject, Inject, Injectable, Injector, runInInjectionContext } from '@angular/core'
import { EmptyMiddleware } from './middlewares/empty.middleware'

@Injectable({
  providedIn: 'root',
})
export class UseCaseService {
  constructor(
    @Inject(InjectionTokens.MIDDLEWARES) private middlewares: Middleware[],
    private readonly injector: Injector,
  ) {}

  async execute<In, Out>(useCase: Type<UseCase<In, Out>>, param?: In, options?: UseCaseOptions): Promise<Out> {
    const requiredOptions = options ?? {
      message: undefined,
    }

    let next: UseCaseHandler | undefined

    runInInjectionContext(this.injector, () => {
      next = UseCaseHandler.create({
        next: inject(useCase),
        options: requiredOptions,
        middleware: inject(EmptyMiddleware),
      })
    })

    if (next === undefined) {
      throw new Error('Could not get UseCaseHandler')
    }

    for (let i = this.middlewares.length - 1; i >= 0; i--) {
      const currentMiddleware = this.middlewares[i]
      const previous = next
      next = UseCaseHandler.create({ next: previous, middleware: currentMiddleware, options: requiredOptions })
    }

    return next.handle(param) as Promise<Out>
  }
}
