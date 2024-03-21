import { bootstrapApplication } from '@angular/platform-browser'
import { appConfig } from './app/app.config'
import { AppComponent } from './app/app.component'
import { browser } from './testing/http-mocks/browser.mocks'
import { isDevMode } from '@angular/core'

let mocks = Promise.resolve()

if (isDevMode()) {
  mocks = browser
    .start({
      onUnhandledRequest: 'bypass',
    })
    .then()
}

mocks.then(() => {
  bootstrapApplication(AppComponent, appConfig).catch(err => console.error(err))
})
