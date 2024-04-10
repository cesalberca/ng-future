import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core'
import { HabitComponent } from '../../../habit.component'
import { Habit } from '../../../habit'
import { RouterLink } from '@angular/router'
import { UseCaseService } from '../../../../../core/use-case/use-case.service'
import { GetHabitsQry } from '../../application/get-habits.qry'

@Component({
  selector: 'app-habit-tasks',
  standalone: true,
  imports: [HabitComponent, RouterLink],
  templateUrl: './habits.page.html',
  styleUrl: './habits.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HabitsPage {
  habits = signal<Habit[]>([])

  constructor(private readonly useCaseService: UseCaseService) {
    effect(async () => {
      const habits = await this.useCaseService.execute(GetHabitsQry)
      this.habits.set(habits)
    })
  }
}
