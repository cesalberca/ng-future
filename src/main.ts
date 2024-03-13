import { bootstrapApplication } from '@angular/platform-browser'
import { appConfig } from './app/app.config'
import { AppComponent } from './app/app.component'
import { browser } from './mocks/browser.mocks'

browser.start().then(() => {
  bootstrapApplication(AppComponent, appConfig).catch(err => console.error(err))
})
