import { ChangeDetectionStrategy, Component, computed, effect, signal } from '@angular/core'
import { HabitComponent } from '../../../delivery/habit/habit.component'
import { RouterLink } from '@angular/router'
import { UseCaseService } from '../../../../../core/use-case/use-case.service'
import { HabitTask } from '../domain/habit-task'
import { GetHabitTasksQry } from '../application/get-habit-tasks.qry'
import { HabitTasksDatePipe } from './habit-tasks-date.pipe'
import { ButtonComponent } from '../../../../../core/components/button/button.component'
import { DateTime } from '../../../../../core/datetime/datetime'
import { Habit } from '../../../../../core/models/habit'
import { UpdateHabitTasksCmd } from '../application/update-habit-tasks.cmd'
import { UpdateHabitTasks } from '../../../../../core/models/update-habit-tasks'

@Component({
  selector: 'app-habit-tasks',
  standalone: true,
  imports: [HabitComponent, RouterLink, HabitTasksDatePipe, ButtonComponent],
  templateUrl: './habit-tasks.page.html',
  styleUrl: './habit-tasks.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HabitTasksPage {
  habitTasks = signal<HabitTask[]>([])
  headers = computed(() => this.habitTasks()?.[0]?.tasks.map(x => x.habit) ?? [])

  toggleHabitTasks = async (date: DateTime, task: { habit: Habit; done: boolean }) => {
    const updateHabitaTask: UpdateHabitTasks = {
      date,
      updatedTask: { habit: task.habit, done: !task.done },
    }
    const res = await this.useCaseService.execute(UpdateHabitTasksCmd, { habitTasks: updateHabitaTask })
    this.habitTasks.set(res)
  }

  constructor(private readonly useCaseService: UseCaseService) {
    effect(async () => {
      const value = await this.useCaseService.execute(GetHabitTasksQry)
      this.habitTasks.set(value)
    })
  }
}
