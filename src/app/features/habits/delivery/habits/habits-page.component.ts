import { ChangeDetectionStrategy, Component } from '@angular/core'
import { HabitComponent } from '../../../../core/components/habit/habit.component'
import { HabitsService } from '../../application/habits.service'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-habits',
  standalone: true,
  imports: [HabitComponent, RouterLink],
  templateUrl: './habits-page.component.html',
  styleUrl: './habits-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HabitsPage {
  constructor(readonly habitService: HabitsService) {}
}
