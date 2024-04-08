import { ApplicationConfig } from '@angular/core'
import { provideRouter, withComponentInputBinding } from '@angular/router'
import { routes } from './app.routes'
import { provideClientHydration } from '@angular/platform-browser'
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http'
import { baseUrlInterceptor } from './core/http/interceptors/base-url.interceptor'
import { HabitsHttpRepository } from './features/habits/habits-http.repository'
import { InjectionTokens } from './core/tokens/injection-tokens'

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideClientHydration(),
    provideHttpClient(withFetch(), withInterceptors([baseUrlInterceptor])),
    {
      provide: InjectionTokens.HABITS_REPOSITORY,
      useClass: HabitsHttpRepository,
    },
  ],
}
