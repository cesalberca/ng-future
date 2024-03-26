import { ChangeDetectionStrategy, Component, EventEmitter, Output, input } from '@angular/core'
import { Id } from '../../../../../../core/models/id'

@Component({
  selector: 'app-habit-remover',
  standalone: true,
  imports: [],
  templateUrl: './habit-remover.component.html',
  styleUrl: './habit-remover.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HabitRemoverComponent {
  habitId = input.required<Id>()

  @Output()
  deleted = new EventEmitter<Id>()
}
