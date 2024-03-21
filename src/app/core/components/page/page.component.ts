import { ChangeDetectionStrategy, Component } from '@angular/core'
import { NavbarComponent } from '../navbar/navbar.component'

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageComponent {}
