import { Routes } from '@angular/router'
import { HabitPage } from './features/habits/features/habit/delivery/habit/habit.page'
import { HabitsPage } from './features/habits/features/habits/delivery/habits.page'
import { CreateHabitPage } from './features/habits/features/create-habit/delivery/create-habit/create-habit.page'
import { NotFoundPage } from './core/components/not-found/not-found-page.component'
import { UpdateHabitPage } from './features/habits/features/update-habit/delivery/update-habit/update-habit.page'

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
        path: 'edit/:id',
        component: UpdateHabitPage,
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
