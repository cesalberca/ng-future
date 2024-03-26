import { Pipe, PipeTransform } from '@angular/core'
import { DateTime } from '../../../../../core/datetime/datetime'

@Pipe({
  standalone: true,
  name: 'habitTasksDate',
})
export class HabitTasksDatePipe implements PipeTransform {
  transform(date: DateTime): string {
    const d = date.format('dd-LL-yyyy')
    if (d === DateTime.fromNow().format('dd-LL-yyyy')) return 'Today'
    return d
  }
}
