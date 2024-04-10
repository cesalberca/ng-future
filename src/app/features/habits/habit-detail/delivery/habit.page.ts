import { ChangeDetectionStrategy, Component, effect, input, signal } from '@angular/core'
import { HabitComponent } from '../../habit.component'
import { Id } from '../../../../core/models/id'
import { Habit } from '../../habit'
import { UseCaseService } from '../../../../core/use-case/use-case.service'
import { GetHabitDetailQry } from '../application/get-habit-detail.qry'
import { Router } from '@angular/router'
import { HabitDeleteComponent } from '../../habit-delete/delivery/habit-delete/habit-delete.component'

@Component({
  selector: 'app-habit-page',
  standalone: true,
  imports: [HabitComponent, HabitDeleteComponent],
  templateUrl: './habit.page.html',
  styleUrl: './habit.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HabitPage {
  id = input.required<Id>()
  habit = signal<Habit | undefined>(undefined)

  constructor(
    private readonly useCaseService: UseCaseService,
    private readonly router: Router,
  ) {
    effect(async () => {
      const habit = await this.useCaseService.execute(GetHabitDetailQry, this.id())
      this.habit.set(habit)
    })
  }

  onDelete() {
    this.router.navigate(['..'])
  }
}
