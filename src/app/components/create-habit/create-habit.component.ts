import { ChangeDetectionStrategy, Component } from '@angular/core'
import { FormControl, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { HabitsService } from '../../services/habits.service'

interface CreateHabitForm {
  name: FormControl<string>
}

@Component({
  selector: 'app-create-habit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-habit.component.html',
  styleUrl: './create-habit.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateHabitComponent {
  form = this.formBuilder.group<CreateHabitForm>({
    name: this.formBuilder.control('', [Validators.required, Validators.min(1)]),
  })

  get name() {
    return this.form.get('name')!
  }

  constructor(
    private readonly formBuilder: NonNullableFormBuilder,
    private readonly habitsService: HabitsService,
  ) {}

  onSubmit() {
    this.habitsService.createHabit({
      name: this.form.value.name!,
    })
  }
}
