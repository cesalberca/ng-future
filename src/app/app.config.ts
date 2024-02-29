import { ApplicationConfig } from '@angular/core'
import { provideRouter, TitleStrategy, withComponentInputBinding } from '@angular/router'
import { routes } from './app.routes'
import { provideClientHydration } from '@angular/platform-browser'
import { InjectionTokens } from './core/tokens/injection-tokens'
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http'
import { HabitsRepository } from './features/habits/domain/habits.repository'
import { baseUrlInterceptor } from './core/http/interceptors/base-url.interceptor'
import { CustomTitleStrategy } from './core/router/custom-title-strategy'
import { HabitsLocalStorageRepository } from './features/habits/infrastructure/habits-local-storage.repository'

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
      provide: HabitsRepository,
      useClass: HabitsLocalStorageRepository,
    },
  ],
}
