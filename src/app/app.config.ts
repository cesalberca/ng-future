import { ApplicationConfig } from '@angular/core'
import { provideRouter, TitleStrategy, withComponentInputBinding } from '@angular/router'
import { routes } from './app.routes'
import { provideClientHydration } from '@angular/platform-browser'
import { InjectionTokens } from './core/tokens/injection-tokens'
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http'
import { baseUrlInterceptor } from './core/http/interceptors/base-url.interceptor'
import { CustomTitleStrategy } from './core/router/custom-title-strategy'
import { HabitsHttpRepository } from './features/habits/infrastructure/habits-http.repository'
import { EmptyMiddleware } from './core/use-case/middlewares/empty.middleware'
import { LogMiddleware } from './core/use-case/middlewares/log.middleware'
import { ErrorMiddleware } from './core/use-case/middlewares/error.middleware'
import { ToastMiddleware } from './core/use-case/middlewares/toast.middleware'

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    { provide: TitleStrategy, useClass: CustomTitleStrategy },
    provideClientHydration(),
    provideHttpClient(withFetch(), withInterceptors([baseUrlInterceptor])),
    {
      provide: InjectionTokens.STORAGE,
      useValue: globalThis.localStorage,
    },
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
