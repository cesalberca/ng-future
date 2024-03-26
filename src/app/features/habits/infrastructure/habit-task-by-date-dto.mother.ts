import { DateTime } from '../../../core/datetime/datetime'
import { HabitMother } from '../../../../testing/mothers/habit.mother'
import { HabitTaskByDateDto } from './habit-task-by-date.dto'
import { IsoDate } from '../../../core/datetime/iso-date'

export class HabitTaskByDateDtoMother {
  static habitTaskByDatesDto(): HabitTaskByDateDto[] {
    return [
      {
        date: DateTime.fromISO('2024-03-22').toISO() as IsoDate,
        habitTasks: [
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
        habitTasks: [
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
