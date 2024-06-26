import { ChangeDetectionStrategy, Component, computed, effect, signal } from '@angular/core'
import { HabitComponent } from '../../../delivery/habit/habit.component'
import { RouterLink } from '@angular/router'
import { UseCaseService } from '../../../../../core/use-case/use-case.service'
import { HabitTask } from '../domain/habit-task'
import { GetHabitTasksQry } from '../application/get-habit-tasks.qry'
import { HabitTasksDatePipe } from './habit-tasks-date.pipe'
import { ButtonComponent } from '../../../../../core/components/button/button.component'
import { DateTime } from '../../../../../core/datetime/datetime'
import { Habit } from '../../../domain/habit'
import { UpdateHabitTasksCmd } from '../application/update-habit-tasks.cmd'
import { UpdateHabitTasks } from '../../update-habit/domain/update-habit-tasks'
import { StreaksComponent } from '../../streaks/delivery/streak/streaks.component'
import { CheckboxComponent } from '../../../../../core/components/checkbox/checkbox.component'

@Component({
  selector: 'app-habit-tasks',
  standalone: true,
  imports: [HabitComponent, RouterLink, HabitTasksDatePipe, ButtonComponent, StreaksComponent, CheckboxComponent],
  templateUrl: './habit-tasks.page.html',
  styleUrl: './habit-tasks.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HabitTasksPage {
  habitTasks = signal<HabitTask[]>([])
  headers = computed(() => this.habitTasks()?.[0]?.tasks.map(x => x.habit) ?? [])

  constructor(private readonly useCaseService: UseCaseService) {
    effect(async () => {
      const value = await this.useCaseService.execute(GetHabitTasksQry)
      this.habitTasks.set(value)
    })
  }

  toggleHabitTasks = async (date: DateTime, task: { habit: Habit; done: boolean }) => {
    const updateHabitaTask: UpdateHabitTasks = {
      date,
      updatedTask: { habit: task.habit, done: !task.done },
    }
    const res = await this.useCaseService.execute(UpdateHabitTasksCmd, { habitTasks: updateHabitaTask })
    this.habitTasks.set(res)
  }
}
