import { Query } from '../../../../../core/use-case/query'
import { HabitTask } from '../domain/habit-task'
import { Inject, Injectable } from '@angular/core'
import { HabitsRepository } from '../../../domain/habits.repository'
import { InjectionTokens } from '../../../../../core/tokens/injection-tokens'

@Injectable({
  providedIn: 'root',
})
export class GetHabitTasksQry implements Query<HabitTask[]> {
  constructor(@Inject(InjectionTokens.HABITS_REPOSITORY) private readonly habitsRepository: HabitsRepository) {}

  handle(): Promise<HabitTask[]> {
    return this.habitsRepository.findAll()
  }
}
