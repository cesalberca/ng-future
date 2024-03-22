import { Habit } from '../../app/core/models/habit'
import { IdMother } from './id.mother'

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
