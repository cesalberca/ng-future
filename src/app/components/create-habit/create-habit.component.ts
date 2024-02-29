import { ChangeDetectionStrategy, Component } from '@angular/core'
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { HabitsService } from '../../services/habits.service'
import { FormModel } from '../../models/form-model'
import { CreateHabitFormModel as CreateHabitForm } from '../../models/create-habit-form-model'
import { Router } from '@angular/router'

type Model = FormModel<CreateHabitForm>

@Component({
  selector: 'app-create-habit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-habit.component.html',
  styleUrl: './create-habit.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateHabitComponent {
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
      name: this.form.value.name!,
    })
    this.router.navigate(['..'])
  }
}
