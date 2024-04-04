import { ChangeDetectionStrategy, Component } from '@angular/core'
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { HabitsService } from '../../../../application/habits.service'
import { FormModel } from '../../../../../../core/models/form-model'
import { CreateHabitFormModel as CreateHabitForm } from '../../../../../../core/models/create-habit-form-model'
import { Router } from '@angular/router'
import { ButtonComponent } from '../../../../../../core/components/button/button.component'
import { FormFieldInputComponent } from '../../../../../../core/components/form-field-input/form-field-input.component'

type Model = FormModel<CreateHabitForm>

@Component({
  selector: 'app-create-habit-page',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonComponent, FormFieldInputComponent],
  templateUrl: './create-habit.page.html',
  styleUrl: './create-habit.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateHabitPage {
  form = this.formBuilder.group<Model>({
    name: this.formBuilder.control('', [Validators.required, Validators.minLength(3)]),
  })

  constructor(
    private readonly formBuilder: NonNullableFormBuilder,
    private readonly habitsService: HabitsService,
    private readonly router: Router,
  ) {}

  get name() {
    return this.form.get('name')!
  }

  get nameErrorMessage() {
    const hasEmailError = this.name?.invalid && (this.name?.dirty || this.name?.touched)
    if (hasEmailError && this.name.errors?.['required']) return 'Required field'
    if (hasEmailError && this.name.errors?.['minlength']) return 'Name must be at least 3 characters long'
    return undefined
  }

  async onSubmit() {
    await this.habitsService.createHabit({
      name: this.name.value,
    })
    this.router.navigate(['..'])
  }
}
