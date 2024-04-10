import { Routes } from '@angular/router'
import { HabitsPage } from './features/habits/habits/delivery/habits-page/habits.page'
import { HabitPage } from './features/habits/habit-detail/delivery/habit.page'
import { NotFoundPage } from './core/components/not-found/not-found-page.component'
import { HabitCreatePage } from './features/habits/habit-create/delivery/habit-create/habit-create.page'

export const routes: Routes = [
  {
    path: 'habits',
    children: [
      {
        path: '',
        component: HabitsPage,
      },
      {
        path: 'create',
        component: HabitCreatePage,
      },
      {
        path: ':id',
        component: HabitPage,
      },
    ],
  },
  {
    path: '',
    redirectTo: 'habits',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundPage,
  },
]
