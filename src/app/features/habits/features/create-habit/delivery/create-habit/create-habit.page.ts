import { ChangeDetectionStrategy, Component } from '@angular/core'
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { HabitsService } from '../../../../application/habits.service'
import { FormModel } from '../../../../../../core/models/form-model'
import { CreateHabitFormModel as CreateHabitForm } from '../../../../../../core/models/create-habit-form-model'
import { Router } from '@angular/router'

type Model = FormModel<CreateHabitForm>

@Component({
  selector: 'app-create-habit-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-habit.page.html',
  styleUrl: './create-habit.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateHabitPage {
  form = this.formBuilder.group<Model>({
    name: this.formBuilder.control('', [Validators.required, Validators.min(1)]),
  })

  get name() {
    return this.form.get('name')!
  }

  constructor(
    private readonly formBuilder: NonNullableFormBuilder,
    private readonly habitsService: HabitsService,
    private readonly router: Router,
  ) {}

  async onSubmit() {
    await this.habitsService.createHabit({
      name: this.name.value,
    })
    this.router.navigate(['..'])
  }
}
