import { Routes } from '@angular/router'
import { CreateHabitComponent } from './components/create-habit/create-habit.component'
import { HabitsComponent } from './components/habits/habits.component'
import { NotFoundComponent } from './components/not-found/not-found.component'

export const routes: Routes = [
  {
    path: 'create',
    component: CreateHabitComponent,
    children: [
      {
        path: 'habits',
        component: HabitsComponent,
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
    component: NotFoundComponent,
  },
]
