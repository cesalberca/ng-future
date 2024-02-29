import { ApplicationConfig, mergeApplicationConfig } from '@angular/core'
import { provideServerRendering } from '@angular/platform-server'
import { appConfig } from './app.config'
import { HabitsRepository } from './features/habits/domain/habits.repository'
import { HabitsInMemoryRepository } from './features/habits/infrastructure/habits-in-memory.repository'

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    {
      provide: HabitsRepository,
      useClass: HabitsInMemoryRepository,
    },
  ],
}

export const config = mergeApplicationConfig(appConfig, serverConfig)
