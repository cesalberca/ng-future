import { Component, effect, signal } from '@angular/core'
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { Habit } from '../../../../domain/habit'
import { FormModel } from '../../../../../../core/models/form-model'
import { CreateHabitFormModel as CreateHabitForm } from '../../../create-habit/domain/create-habit-form-model'
import { UseCaseService } from '../../../../../../core/use-case/use-case.service'
import { UpdateHabitCmd } from '../../application/update-habit.cmd'
import { Router } from '@angular/router'
import { ButtonComponent } from '../../../../../../core/components/button/button.component'
import { Id } from '../../../../../../core/models/id'
import { EmbedableModal } from '../../../../../../core/components/modal/embebable-modal'
import { FormFieldInputComponent } from '../../../../../../core/components/form-field-input/form-field-input.component'
import { GetHabitQry } from '../../../habit/application/get-habit.qry'

type Model = FormModel<CreateHabitForm>

@Component({
  selector: 'app-update-habit-component',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonComponent, FormFieldInputComponent],
  templateUrl: './update-habit.component.html',
  styleUrl: './update-habit.component.css',
})
export class UpdateHabitComponent extends EmbedableModal<Id> {
  habit = signal<Habit | undefined>(undefined)
  form = this.formBuilder.group<Model>({
    name: this.formBuilder.control('', [Validators.required, Validators.minLength(3)]),
  })

  constructor(
    private readonly formBuilder: NonNullableFormBuilder,
    private readonly useCaseService: UseCaseService,
    private readonly router: Router,
  ) {
    super()
    effect(async () => {
      if (this.data) {
        const habit = await this.useCaseService.execute(GetHabitQry, this.data)
        this.habit.set(habit)
        this.form.setValue({ name: habit!.name })
      }
    })
  }

  get name() {
    return this.form.get('name')!
  }

  get nameErrorMessage() {
    const hasEmailError = this.name?.invalid && (this.name?.dirty || this.name?.touched)
    if (hasEmailError && this.name.errors?.['required']) return 'Required field'
    if (hasEmailError && this.name.errors?.['minlength']) return 'Name must be at least 3 characters long'
    return undefined
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
