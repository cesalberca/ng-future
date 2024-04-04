import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { Habit } from '../../domain/habit'
import { RouterLink } from '@angular/router'

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
}
