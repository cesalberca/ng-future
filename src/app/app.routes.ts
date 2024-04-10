import { Routes } from '@angular/router'
import { HabitsPage } from './features/habits/habits/habits.page'
import { HabitPage } from './features/habits/habit-detail/habit.page'
import { NotFoundPage } from './core/components/not-found/not-found-page.component'
import { CreateHabitPage } from './features/habits/habit-create/delivery/create-habit/create-habit.page'

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
        component: CreateHabitPage,
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
