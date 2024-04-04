import { bootstrapApplication } from '@angular/platform-browser'
import { appConfig } from './app/app.config'
import { AppComponent } from './app/app.component'
import { isDevMode } from '@angular/core'

async function enableMocking() {
  if (!isDevMode()) {
    return
  }

  const { browser } = await import('./testing/http-mocks/browser.mocks')
  return browser.start()
}

enableMocking().then(() => {
  bootstrapApplication(AppComponent, appConfig).catch(err => console.error(err))
})
