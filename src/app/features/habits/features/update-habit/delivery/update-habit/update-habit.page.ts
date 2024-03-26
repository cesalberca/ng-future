import { Component, input, signal, effect } from '@angular/core'
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { Id } from '../../../../../../core/models/id'
import { Habit } from '../../../../../../core/models/habit'
import { HabitsService } from '../../../../application/habits.service'
import { FormModel } from '../../../../../../core/models/form-model'
import { CreateHabitFormModel as CreateHabitForm } from '../../../../../../core/models/create-habit-form-model'
import { UseCaseService } from '../../../../../../core/use-case/use-case.service'
import { UpdateHabitCmd } from '../../application/update-habit.cmd'
import { Router } from '@angular/router'

type Model = FormModel<CreateHabitForm>

@Component({
  selector: 'app-update-habit-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './update-habit.page.html',
  styleUrl: './update-habit.page.css',
})
export class UpdateHabitPage {
  id = input.required<Id>()
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
    effect(async () => {
      const habit = await this.habitsService.getHabit(this.id())
      this.habit.set(habit)
      this.form.setValue({ name: habit!.name })
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
  }
}
