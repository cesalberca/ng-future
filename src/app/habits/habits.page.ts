import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core'
import { HabitComponent } from './habit.component'
import { Habit } from './habit'
import { HabitsService } from './habits.service'

@Component({
  selector: 'app-habit-tasks',
  standalone: true,
  imports: [HabitComponent],
  templateUrl: './habits.page.html',
  styleUrl: './habits.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HabitsPage {
  habits = signal<Habit[]>([])

  constructor(private readonly habitsService: HabitsService) {
    effect(async () => {
      const habits = await this.habitsService.findAll()
      this.habits.set(habits)
    })
  }
}
