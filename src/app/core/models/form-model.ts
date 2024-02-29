import { FormControl } from '@angular/forms'

export type FormModel<T> = {
  [P in keyof T]: FormControl<T[P]>
}
