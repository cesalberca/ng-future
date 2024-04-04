import { Inject, Injectable } from '@angular/core'
import { InjectionTokens } from '../../../../../core/tokens/injection-tokens'
import { HabitTasksRepository } from '../../../domain/habit-tasks.repository'
import { Command } from '../../../../../core/use-case/command'
import { UpdateHabitTasks } from '../../update-habit/domain/update-habit-tasks'
import { HabitTask } from '../domain/habit-task'

@Injectable({
  providedIn: 'root',
})
export class UpdateHabitTasksCmd implements Command<{ habitTasks: UpdateHabitTasks }, HabitTask[]> {
  constructor(
    @Inject(InjectionTokens.HABIT_TASKS_REPOSITORY) private readonly habitTasksRepository: HabitTasksRepository,
  ) {}

  handle({ habitTasks }: { habitTasks: UpdateHabitTasks }) {
    return this.habitTasksRepository.update(habitTasks)
  }
}
