import { ErrorHandler, Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class GlobalErrorHandler implements ErrorHandler {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleError(error: any) {
    console.error(error)
  }
}
