import { Query } from '../../../../../core/use-case/query'
import { HabitTaskByDate } from '../domain/habit-task-by-date'
import { Inject, Injectable } from '@angular/core'
import { HabitsRepository } from '../../../domain/habits.repository'
import { InjectionTokens } from '../../../../../core/tokens/injection-tokens'

@Injectable({
  providedIn: 'root',
})
export class GetHabitTaskByDatesQry implements Query<HabitTaskByDate[]> {
  constructor(@Inject(InjectionTokens.HABITS_REPOSITORY) private readonly habitsRepository: HabitsRepository) {}

  handle(): Promise<HabitTaskByDate[]> {
    return this.habitsRepository.findAll()
  }
}
