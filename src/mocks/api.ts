import { environment } from '../environments/environment'

export function api(path: string) {
  return `${environment.apiBaseUrl}/${path}`
}
