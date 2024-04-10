import { ChangeDetectionStrategy, Component, input, output } from '@angular/core'
import { DeleteHabitCmd } from '../../application/delete-habit.cmd'
import { Habit } from '../../../habit'
import { Id } from '../../../../../core/models/id'
import { UseCaseService } from '../../../../../core/use-case/use-case.service'
import { ButtonComponent } from '../../../../../core/components/button/button.component'

@Component({
  selector: 'app-habit-delete',
  standalone: true,
  templateUrl: './habit-delete.component.html',
  styleUrl: './habit-delete.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonComponent],
})
export class HabitDeleteComponent {
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
