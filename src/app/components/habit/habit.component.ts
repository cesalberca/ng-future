import { Component, Input } from '@angular/core'
import { Habit } from '../../models/habit'

@Component({
  selector: 'app-habit',
  standalone: true,
  imports: [],
  templateUrl: './habit.component.html',
  styleUrl: './habit.component.css',
})
export class HabitComponent {
  @Input({ required: true })
  habit!: Habit
}
