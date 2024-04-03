import { Component, signal, effect } from '@angular/core'
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { Habit } from '../../../../../../core/models/habit'
import { HabitsService } from '../../../../application/habits.service'
import { FormModel } from '../../../../../../core/models/form-model'
import { CreateHabitFormModel as CreateHabitForm } from '../../../../../../core/models/create-habit-form-model'
import { UseCaseService } from '../../../../../../core/use-case/use-case.service'
import { UpdateHabitCmd } from '../../application/update-habit.cmd'
import { Router } from '@angular/router'
import { ButtonComponent } from '../../../../../../core/components/button/button.component'
import { Id } from '../../../../../../core/models/id'
import { EmbedableModal } from '../../../../../../core/components/modal/embebable-modal'

type Model = FormModel<CreateHabitForm>

@Component({
  selector: 'app-update-habit-component',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonComponent],
  templateUrl: './update-habit.component.html',
  styleUrl: './update-habit.component.css',
})
export class UpdateHabitComponent extends EmbedableModal<Id> {
  habit = signal<Habit | undefined>(undefined)
  form = this.formBuilder.group<Model>({
    name: this.formBuilder.control('', [Validators.required, Validators.min(1)]),
  })

  get name() {
    return this.form.get('name')!
  }

  constructor(
    private readonly formBuilder: NonNullableFormBuilder,
    private readonly habitsService: HabitsService,
    private readonly useCaseService: UseCaseService,
    private readonly router: Router,
  ) {
    super()
    effect(async () => {
      if (this.data) {
        const habit = await this.habitsService.getHabit(this.data)
        this.habit.set(habit)
        this.form.setValue({ name: habit!.name })
      }
    })
  }

  async update() {
    await this.useCaseService.execute(
      UpdateHabitCmd,
      { id: this.habit()!.id, name: this.form.value.name },
      {
        message: {
          title: `Habit ${this.habit()?.name} updated to ${this.form.value.name}`,
        },
      },
    )
    this.router.navigate(['..'])
    this.close()
  }
}
