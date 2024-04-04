import { Habit } from '../../app/features/habits/domain/habit'
import { IdMother } from './id.mother'
import { HabitTask } from '../../app/features/habits/features/habit-tasks/domain/habit-task'
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

  static habitTaskByDates(): HabitTask[] {
    return [
      {
        date: DateTime.fromISO('2024-03-22'),
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
        date: DateTime.fromISO('2024-03-21'),
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
