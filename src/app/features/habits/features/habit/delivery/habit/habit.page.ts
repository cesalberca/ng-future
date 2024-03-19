import { ChangeDetectionStrategy, Component, effect, input, signal } from '@angular/core'
import { Id } from '../../../../../../core/models/id'
import { HabitsService } from '../../../../application/habits.service'
import { Habit } from '../../../../../../core/models/habit'
import { HabitComponent } from '../../../../../../core/components/habit/habit.component'
import { Router } from '@angular/router'
import { HabitRemoverComponent } from '../../../../delivery/habits/habit-remover/habit-remover.component'

@Component({
  selector: 'app-habit-page',
  standalone: true,
  imports: [HabitComponent, HabitRemoverComponent],
  templateUrl: './habit.page.html',
  styleUrl: './habit.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HabitPage {
  id = input.required<Id>()
  habit = signal<Habit | undefined>(undefined)

  constructor(
    private readonly habitsService: HabitsService,
    private readonly router: Router,
  ) {
    effect(async () => {
      const habit = await this.habitsService.getHabit(this.id())
      this.habit.set(habit)
    })
  }

  async delete() {
    await this.habitsService.deleteHabit(this.id())
    this.router.navigate(['..'])
  }
}
