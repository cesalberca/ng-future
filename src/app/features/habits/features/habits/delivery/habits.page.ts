import { ChangeDetectionStrategy, Component, computed, effect, signal } from '@angular/core'
import { HabitComponent } from '../../../delivery/habit/habit.component'
import { RouterLink } from '@angular/router'
import { UseCaseService } from '../../../../../core/use-case/use-case.service'
import { HabitTaskByDate } from '../domain/habit-task-by-date'
import { GetHabitTaskByDatesQry } from '../application/get-habit-task-by-dates.qry'

@Component({
  selector: 'app-habits',
  standalone: true,
  imports: [HabitComponent, RouterLink],
  templateUrl: './habits.page.html',
  styleUrl: './habits.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HabitsPage {
  habitTaskByDates = signal<HabitTaskByDate[]>([])
  headers = computed(() => this.habitTaskByDates()?.[0].habitTasks.map(x => x.habit) ?? [])

  constructor(private readonly useCaseService: UseCaseService) {
    effect(async () => {
      const value = await this.useCaseService.execute(GetHabitTaskByDatesQry)
      this.habitTaskByDates.set(value)
    })
  }
}
