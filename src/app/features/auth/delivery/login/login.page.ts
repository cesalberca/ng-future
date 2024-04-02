import { ChangeDetectionStrategy, Component } from '@angular/core'
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { ButtonComponent } from '../../../../core/components/button/button.component'
import { FormModel } from '../../../../core/models/form-model'
import { LoginCmd } from '../../application/login.cmd'
import { Router } from '@angular/router'
import { UseCaseService } from '../../../../core/use-case/use-case.service'

type LoginFormModel = FormModel<{ email: string; password: string }>

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonComponent],
  templateUrl: './login.page.html',
  styleUrl: './login.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPage {
  constructor(
    private readonly formBuilder: NonNullableFormBuilder,
    private readonly useCaseService: UseCaseService,
    private readonly router: Router,
  ) {}

  form = this.formBuilder.group<LoginFormModel>({
    email: this.formBuilder.control('', [Validators.required, Validators.email]),
    password: this.formBuilder.control('', [Validators.required, Validators.minLength(6)]),
  })

  async onSubmit() {
    if (!this.form.valid) return
    const email = this.form.get('email')?.value ?? ''
    const password = this.form.get('password')?.value ?? ''
    await this.useCaseService.execute(LoginCmd, { email, password })
    await this.router.navigateByUrl('/habits')
  }
}
