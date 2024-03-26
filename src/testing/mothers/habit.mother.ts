import { Habit } from '../../app/core/models/habit'
import { IdMother } from './id.mother'
import { HabitTaskByDate } from '../../app/features/habits/features/habits/domain/habit-task-by-date'
import { DateTime } from '../../app/core/datetime/datetime'

export class HabitMother {
  static reading(): Habit {
    return {
      id: IdMother.id(),
      name: 'Read',
    }
  }

  static meditate(): Habit {
    return {
      id: IdMother.id2(),
      name: 'Meditate',
    }
  }

  static habits(): Habit[] {
    return [this.reading(), this.meditate()]
  }

  static habitTaskByDates(): HabitTaskByDate[] {
    return [
      {
        date: DateTime.fromISO('2024-03-22'),
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
        date: DateTime.fromISO('2024-03-21'),
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
