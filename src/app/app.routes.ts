import { Routes } from '@angular/router'
import { HabitPage } from './features/habits/features/habit/delivery/habit/habit.page'
import { HabitTasksPage } from './features/habits/features/habit-tasks/delivery/habit-tasks.page'
import { CreateHabitPage } from './features/habits/features/create-habit/delivery/create-habit/create-habit.page'
import { NotFoundPage } from './core/components/not-found/not-found-page.component'
import { LoginPage } from './features/auth/delivery/login/login.page'

export const routes: Routes = [
  {
    path: 'login',
    component: LoginPage,
  },
  {
    path: 'habits',
    children: [
      {
        path: '',
        component: HabitTasksPage,
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
