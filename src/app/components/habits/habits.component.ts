import { Component } from '@angular/core'
import { Habit } from '../../models/habit'
import { HabitComponent } from '../habit/habit.component'

@Component({
  selector: 'app-habits',
  standalone: true,
  imports: [HabitComponent],
  templateUrl: './habits.component.html',
  styleUrl: './habits.component.css',
})
export class HabitsComponent {
  habits: Habit[] = [
    {
      id: 'asu-3s-3',
      name: 'Exercise',
    },
    {
      id: 'asu-3s-4',
      name: 'Read',
    },
  ]
}
