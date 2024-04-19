import { ChangeDetectionStrategy, Component, signal } from '@angular/core'
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
    this.habitsService.findAll().then(x => {
      this.habits.set(x)
    })
  }
}
