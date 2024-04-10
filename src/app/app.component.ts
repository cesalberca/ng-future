import { ChangeDetectionStrategy, Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { PageComponent } from './core/components/page/page.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
