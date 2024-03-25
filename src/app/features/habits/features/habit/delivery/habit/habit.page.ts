import { ChangeDetectionStrategy, Component, effect, input, signal } from '@angular/core'
import { Id } from '../../../../../../core/models/id'
import { HabitsService } from '../../../../application/habits.service'
import { Habit } from '../../../../../../core/models/habit'
import { HabitComponent } from '../../../../../../core/components/habit/habit.component'
import { Router } from '@angular/router'
import { HabitRemoverComponent } from '../../../../delivery/habits/habit-remover/habit-remover.component'
import { DeleteHabitCmd } from '../../../../application/delete-habit.cmd'
import { UseCaseService } from '../../../../../../core/use-case/use-case.service'
import { HabitUpdaterComponent } from '../../../../delivery/habits/habit-updater/habit-updater.component'

@Component({
  selector: 'app-habit-page',
  standalone: true,
  imports: [HabitComponent, HabitRemoverComponent, HabitUpdaterComponent],
  templateUrl: './habit.page.html',
  styleUrl: './habit.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HabitPage {
  id = input.required<Id>()
  habit = signal<Habit | undefined>(undefined)

  constructor(
    private readonly useCaseService: UseCaseService,
    private readonly habitsService: HabitsService,
    private readonly router: Router,
  ) {
    effect(async () => {
      const habit = await this.habitsService.getHabit(this.id())
      this.habit.set(habit)
    })
  }

  async delete() {
    const name = this.habit()?.name
    await this.useCaseService.execute(
      DeleteHabitCmd,
      { id: this.id() },
      {
        message: {
          title: `Habit ${name} deleted`,
        },
      },
    )
    this.router.navigate(['..'])
  }
}
