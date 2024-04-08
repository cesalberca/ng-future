import { Injectable } from '@angular/core'
import { Id } from '../models/id'

@Injectable({
  providedIn: 'root',
})
export class UuidService {
  generate(): Id {
    return '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, (c: string) => {
      const randomValues = crypto.getRandomValues(new Uint8Array(1))
      const byte = randomValues[0] & (15 >> (parseInt(c) / 4))
      return (parseInt(c, 10) ^ byte).toString(16)
    })
  }
}
