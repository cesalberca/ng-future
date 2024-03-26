import { DateTime } from '../../../core/datetime/datetime'
import { HabitMother } from '../../../../testing/mothers/habit.mother'
import { HabitTasksDto } from './habit-tasks.dto'
import { IsoDate } from '../../../core/datetime/iso-date'

export class HabitTasksDtoMother {
  static habitTasksDto(): HabitTasksDto[] {
    return [
      {
        date: DateTime.fromNow().toISO() as IsoDate,
        tasks: [
          {
            habit: HabitMother.reading(),
            done: true,
          },
          {
            habit: HabitMother.meditate(),
            done: false,
          },
        ],
      },
      {
        date: DateTime.fromISO('2024-03-22').toISO() as IsoDate,
        tasks: [
          {
            habit: HabitMother.reading(),
            done: true,
          },
          {
            habit: HabitMother.meditate(),
            done: false,
          },
        ],
      },
      {
        date: DateTime.fromISO('2024-03-21').toISO() as IsoDate,
        tasks: [
          {
            habit: HabitMother.reading(),
            done: false,
          },
          {
            habit: HabitMother.meditate(),
            done: true,
          },
        ],
      },
    ]
  }
}
