import { ChangeDetectionStrategy, Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { HabitsComponent } from './components/habits/habits.component'
import { CreateHabitComponent } from './components/create-habit/create-habit.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HabitsComponent, CreateHabitComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'ng-future'
}
