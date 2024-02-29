import { ApplicationConfig } from '@angular/core'
import { provideRouter, TitleStrategy } from '@angular/router'
import { routes } from './app.routes'
import { provideClientHydration } from '@angular/platform-browser'
import { InjectionTokens } from './tokens/injection-tokens'
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http'
import { HabitsRepository } from './repositories/habits.repository'
import { HabitsHttpRepository } from './repositories/habits-http.repository'
import { baseUrlInterceptor } from './interceptors/base-url.interceptor'
import { CustomTitleStrategy } from './router/custom-title-strategy'

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    { provide: TitleStrategy, useClass: CustomTitleStrategy },
    provideClientHydration(),
    provideHttpClient(withFetch(), withInterceptors([baseUrlInterceptor])),
    {
      provide: InjectionTokens.STORAGE,
      useValue: globalThis.localStorage,
    },
    {
      provide: HabitsRepository,
      useClass: HabitsHttpRepository,
    },
  ],
}
