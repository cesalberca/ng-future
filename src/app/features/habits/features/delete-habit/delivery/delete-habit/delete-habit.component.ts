import { ChangeDetectionStrategy, Component, input, output } from '@angular/core'
import { Id } from '../../../../../../core/models/id'
import { DeleteHabitCmd } from '../../application/delete-habit.cmd'
import { Habit } from '../../../../domain/habit'
import { UseCaseService } from '../../../../../../core/use-case/use-case.service'
import { ButtonComponent } from '../../../../../../core/components/button/button.component'

@Component({
  selector: 'app-delete-habit',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './delete-habit.component.html',
  styleUrl: './delete-habit.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteHabitComponent {
  habit = input.required<Habit>()

  deleted = output<Id>()

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
