import { bootstrapApplication } from '@angular/platform-browser'
import { AppComponent } from './app/app.component'
import { config } from './app/app.config.server'
import { isDevMode } from '@angular/core'

async function enableMocking() {
  if (!isDevMode()) return

  const { server } = await import('./tests/http-mocks/server.mocks')
  return server.listen()
}

const bootstrap = async () => {
  await enableMocking()
  return bootstrapApplication(AppComponent, config)
}

export default bootstrap
