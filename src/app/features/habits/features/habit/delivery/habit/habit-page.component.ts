import { ChangeDetectionStrategy, Component, effect, input, signal } from '@angular/core'
import { Id } from '../../../../../../core/models/id'
import { HabitsService } from '../../../../application/habits.service'
import { Habit } from '../../../../../../core/models/habit'
import { HabitComponent } from '../../../../../../core/components/habit/habit.component'

@Component({
  selector: 'app-habit-page',
  standalone: true,
  imports: [HabitComponent],
  templateUrl: './habit-page.component.html',
  styleUrl: './habit-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HabitPage {
  id = input.required<Id>()
  habit = signal<Habit | undefined>(undefined)

  constructor(private readonly habitsService: HabitsService) {
    effect(async () => {
      const habit = await this.habitsService.getHabit(this.id())
      this.habit.set(habit)
    })
  }
}
