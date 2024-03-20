import { ChangeDetectionStrategy, Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { ErrorToasterComponent } from './core/components/errors/error-toaster/error-toaster.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ErrorToasterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
