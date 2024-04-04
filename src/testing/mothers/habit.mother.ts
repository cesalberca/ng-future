import { IdMother } from './id.mother'
import { Habit } from '../../app/features/habits/habit'

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
}
