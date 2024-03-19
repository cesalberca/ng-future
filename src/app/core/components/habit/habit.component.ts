import { ChangeDetectionStrategy, Component, EventEmitter, input, Output } from '@angular/core'
import { Habit } from '../../models/habit'
import { RouterLink } from '@angular/router'
import { Id } from '../../models/id'

@Component({
  selector: 'app-habit',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './habit.component.html',
  styleUrl: './habit.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HabitComponent {
  habit = input.required<Habit>()

  @Output()
  deleted = new EventEmitter<Id>()
}
