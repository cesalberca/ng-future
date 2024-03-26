import { ChangeDetectionStrategy, Component, effect, input, signal } from '@angular/core'
import { Id } from '../../../../../../core/models/id'
import { HabitsService } from '../../../../application/habits.service'
import { Habit } from '../../../../../../core/models/habit'
import { HabitComponent } from '../../../../delivery/habit/habit.component'
import { DeleteHabitComponent } from '../../../delete-habit/delivery/delete-habit/delete-habit.component'
import { HabitUpdaterComponent } from '../habit-updater/habit-updater.component'
import { Router } from '@angular/router'

@Component({
  selector: 'app-habit-page',
  standalone: true,
  imports: [HabitComponent, DeleteHabitComponent, HabitUpdaterComponent],
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

  onDelete() {
    this.router.navigate(['..'])
  }
}
