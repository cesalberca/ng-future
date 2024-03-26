import { ChangeDetectionStrategy, Component, computed, effect, signal } from '@angular/core'
import { HabitComponent } from '../../../delivery/habit/habit.component'
import { RouterLink } from '@angular/router'
import { UseCaseService } from '../../../../../core/use-case/use-case.service'
import { HabitTask } from '../domain/habit-task'
import { GetHabitTasksQry } from '../application/get-habit-tasks.qry'

@Component({
  selector: 'app-habit-tasks',
  standalone: true,
  imports: [HabitComponent, RouterLink],
  templateUrl: './habit-tasks.page.html',
  styleUrl: './habit-tasks.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HabitTasksPage {
  habitTasks = signal<HabitTask[]>([])
  headers = computed(() => this.habitTasks()?.[0].tasks.map(x => x.habit) ?? [])

  constructor(private readonly useCaseService: UseCaseService) {
    effect(async () => {
      const value = await this.useCaseService.execute(GetHabitTasksQry)
      this.habitTasks.set(value)
    })
  }
}
