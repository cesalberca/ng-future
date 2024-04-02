import { ChangeDetectionStrategy, Component } from '@angular/core'
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { ButtonComponent } from '../../../../core/components/button/button.component'
import { FormModel } from '../../../../core/models/form-model'
import { AuthService } from '../../application/auth.service'

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
    private readonly authService: AuthService,
  ) {}

  form = this.formBuilder.group<LoginFormModel>({
    email: this.formBuilder.control('', [Validators.required, Validators.email]),
    password: this.formBuilder.control('', [Validators.required, Validators.minLength(6)]),
  })

  onSubmit() {
    if (!this.form.valid) return
    const email = this.form.get('email')?.value ?? ''
    const password = this.form.get('password')?.value ?? ''
    this.authService
      .login(email, password)
      .then(res => {
        console.log(res)
        //TODO: Redirigir a /habits
      })
      .catch(e => {
        console.error(e)
        console.log(e.error)
        //TODO: Mostrar error en el formulario
      })
  }
}
