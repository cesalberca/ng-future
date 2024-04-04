import { bootstrapApplication } from '@angular/platform-browser'
import { appConfig } from './app/app.config'
import { AppComponent } from './app/app.component'
import { isDevMode } from '@angular/core'

async function enableMocking() {
  if (!isDevMode()) return

  const { browser } = await import('./tests/http-mocks/browser.mocks')
  return browser.start({
    onUnhandledRequest: 'bypass',
  })
}

enableMocking().then(() => {
  bootstrapApplication(AppComponent, appConfig).catch(err => console.error(err))
})
