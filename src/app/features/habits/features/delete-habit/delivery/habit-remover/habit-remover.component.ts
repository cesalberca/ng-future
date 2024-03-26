import { ChangeDetectionStrategy, Component, EventEmitter, Output, input } from '@angular/core'
import { Id } from '../../../../../../core/models/id'
import { DeleteHabitCmd } from '../../application/delete-habit.cmd'
import { Habit } from '../../../../../../core/models/habit'
import { UseCaseService } from '../../../../../../core/use-case/use-case.service'

@Component({
  selector: 'app-habit-remover',
  standalone: true,
  imports: [],
  templateUrl: './habit-remover.component.html',
  styleUrl: './habit-remover.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HabitRemoverComponent {
  habit = input.required<Habit>()

  @Output()
  deleted = new EventEmitter<Id>()

  constructor(private readonly useCaseService: UseCaseService) {}

  async delete() {
    const name = this.habit().name
    await this.useCaseService.execute(
      DeleteHabitCmd,
      { id: this.habit().id },
      {
        message: {
          title: `Habit ${name} deleted`,
        },
      },
    )
    this.deleted.emit(this.habit().id)
  }
}
