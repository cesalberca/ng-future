import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { Habit } from '../../models/habit'

@Component({
  selector: 'app-habit',
  standalone: true,
  imports: [],
  templateUrl: './habit.component.html',
  styleUrl: './habit.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HabitComponent {
  habit = input.required<Habit>()
}
