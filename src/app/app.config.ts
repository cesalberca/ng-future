import { ApplicationConfig } from '@angular/core'
import { provideRouter, withComponentInputBinding } from '@angular/router'
import { routes } from './app.routes'
import { provideClientHydration } from '@angular/platform-browser'
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http'
import { baseUrlInterceptor } from './core/http/interceptors/base-url.interceptor'
import { HabitsHttpRepository } from './features/habits/habits-http.repository'
import { InjectionTokens } from './core/tokens/injection-tokens'
import { ToastMiddleware } from './core/use-case/middlewares/toast.middleware'
import { EmptyMiddleware } from './core/use-case/middlewares/empty.middleware'
import { LogMiddleware } from './core/use-case/middlewares/log.middleware'
import { ErrorMiddleware } from './core/use-case/middlewares/error.middleware'

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideClientHydration(),
    provideHttpClient(withFetch(), withInterceptors([baseUrlInterceptor])),
    {
      provide: InjectionTokens.HABITS_REPOSITORY,
      useClass: HabitsHttpRepository,
    },
    {
      provide: InjectionTokens.MIDDLEWARES,
      useClass: EmptyMiddleware,
      multi: true,
    },
    {
      provide: InjectionTokens.MIDDLEWARES,
      useClass: LogMiddleware,
      multi: true,
    },
    {
      provide: InjectionTokens.MIDDLEWARES,
      useClass: ErrorMiddleware,
      multi: true,
    },
    {
      provide: InjectionTokens.MIDDLEWARES,
      useClass: ToastMiddleware,
      multi: true,
    },
  ],
}
