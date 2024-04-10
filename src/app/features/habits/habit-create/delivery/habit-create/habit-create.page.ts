import { ChangeDetectionStrategy, Component } from '@angular/core'
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { FormModel } from '../../../../../core/models/form-model'
import { HabitCreateFormModel } from '../../domain/habit-create-form-model'
import { UseCaseService } from '../../../../../core/use-case/use-case.service'
import { HabitCreateCmd } from '../../application/habit-create.cmd'

type Model = FormModel<HabitCreateFormModel>

@Component({
  selector: 'app-habit-create-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './habit-create.page.html',
  styleUrl: './habit-create.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HabitCreatePage {
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

  async onSubmit() {
    await this.useCaseService.execute(HabitCreateCmd, { name: this.name.value })
    this.router.navigate(['..'])
  }
}
