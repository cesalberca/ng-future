import { ChangeDetectionStrategy, Component } from '@angular/core'
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { FormModel } from '../../../../../../core/models/form-model'
import { CreateHabitFormModel as CreateHabitForm } from '../../domain/create-habit-form-model'
import { Router } from '@angular/router'
import { ButtonComponent } from '../../../../../../core/components/button/button.component'
import { FormFieldInputComponent } from '../../../../../../core/components/form-field-input/form-field-input.component'
import { UseCaseService } from '../../../../../../core/use-case/use-case.service'
import { CreateHabitCmd } from '../../application/create-habit.cmd'

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
    private readonly useCaseService: UseCaseService,
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
    await this.useCaseService.execute(CreateHabitCmd, {
      name: this.name.value,
    })
    await this.router.navigate(['..'])
  }
}
