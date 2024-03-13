import { afterRender, AfterRenderPhase, ChangeDetectionStrategy, Component } from '@angular/core'
import { HabitComponent } from '../../../../core/components/habit/habit.component'
import { HabitsService } from '../../application/habits.service'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-habits',
  standalone: true,
  imports: [HabitComponent, RouterLink],
  templateUrl: './habits.page.html',
  styleUrl: './habits.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HabitsPage {
  constructor(readonly habitService: HabitsService) {
    afterRender(
      () => {
        this.habitService.loadHabits()
      },
      { phase: AfterRenderPhase.Write },
    )
  }
}
