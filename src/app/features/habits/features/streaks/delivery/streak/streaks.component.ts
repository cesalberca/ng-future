import { Component, computed, input } from '@angular/core'
import { HabitTask } from '../../../habit-tasks/domain/habit-task'
import { StreaksService } from '../../domain/streaks.service'

@Component({
  selector: 'app-streaks',
  standalone: true,
  templateUrl: './streaks.component.html',
  styleUrl: './streaks.component.css',
})
export class StreaksComponent {
  constructor(private readonly streaksService: StreaksService) {}

  habitTasks = input.required<HabitTask[]>()
  streaks = computed(() => this.streaksService.calculateStreaks(this.habitTasks()))
  countToString = (count: number) => this.streaksService.streakCountToString(count)
}
