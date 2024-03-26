import { Query } from '../../../../../core/use-case/query'
import { HabitTask } from '../domain/habit-task'
import { Inject, Injectable } from '@angular/core'
import { InjectionTokens } from '../../../../../core/tokens/injection-tokens'
import { HabitTasksRepository } from '../../../domain/habit-tasks.repository'

@Injectable({
  providedIn: 'root',
})
export class GetHabitTasksQry implements Query<HabitTask[]> {
  constructor(
    @Inject(InjectionTokens.HABIT_TASKS_REPOSITORY) private readonly habitTasksRepository: HabitTasksRepository,
  ) {}

  handle(): Promise<HabitTask[]> {
    return this.habitTasksRepository.findAll()
  }
}
