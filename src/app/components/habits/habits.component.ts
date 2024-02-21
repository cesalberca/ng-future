import { ChangeDetectionStrategy, Component } from '@angular/core'
import { HabitComponent } from '../habit/habit.component'
import { HabitsService } from '../../services/habits.service'

@Component({
  selector: 'app-habits',
  standalone: true,
  imports: [HabitComponent],
  templateUrl: './habits.component.html',
  styleUrl: './habits.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HabitsComponent {
  constructor(readonly habitService: HabitsService) {}
}
