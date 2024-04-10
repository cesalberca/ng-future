import { ChangeDetectionStrategy, Component, effect, input, signal } from '@angular/core'
import { HabitComponent } from '../habit.component'
import { Id } from '../../../core/models/id'
import { Habit } from '../habit'
import { HabitsService } from '../habits.service'

@Component({
  selector: 'app-habit-page',
  standalone: true,
  imports: [HabitComponent],
  templateUrl: './habit.page.html',
  styleUrl: './habit.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HabitPage {
  id = input.required<Id>()
  habit = signal<Habit | undefined>(undefined)

  constructor(private readonly habitsService: HabitsService) {
    effect(async () => {
      const habit = await this.habitsService.findOne(this.id())
      this.habit.set(habit)
    })
  }
}
