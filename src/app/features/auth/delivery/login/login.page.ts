import { ChangeDetectionStrategy, Component } from '@angular/core'
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { ButtonComponent } from '../../../../core/components/button/button.component'
import { FormModel } from '../../../../core/models/form-model'
import { LoginCmd } from '../../application/login.cmd'
import { Router } from '@angular/router'
import { UseCaseService } from '../../../../core/use-case/use-case.service'
import { FormFieldInputComponent } from '../../../../core/components/form-field-input/form-field-input.component'

type LoginFormModel = FormModel<{ email: string; password: string }>

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonComponent, FormFieldInputComponent],
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
    password: this.formBuilder.control('', [Validators.required]),
  })

  get email() {
    return this.form.get('email')
  }

  get password() {
    return this.form.get('password')
  }

  get passwordErrorMessage() {
    const hasPasswordError = this.password?.invalid && (this.password?.dirty || this.password?.touched)
    return hasPasswordError && this.password?.errors?.['required'] ? 'Campo obligatorio' : undefined
  }

  get emailErrorMessage() {
    const hasEmailError = this.email?.invalid && (this.email?.dirty || this.email?.touched)
    if (hasEmailError && this.email.errors?.['required']) return 'Campo obligatorio'
    if (hasEmailError && this.email.errors?.['email']) return 'Dirección de correo electrónico no válida'
    return undefined
  }

  async onSubmit() {
    this.form.markAllAsTouched()
    if (!this.form.valid) return
    const email = this.form.get('email')?.value ?? ''
    const password = this.form.get('password')?.value ?? ''
    await this.useCaseService.execute(LoginCmd, { email, password })
    await this.router.navigateByUrl('/habits')
  }
}
