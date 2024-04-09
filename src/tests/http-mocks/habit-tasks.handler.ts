import { http, HttpResponse } from 'msw'
import { api } from './api'
import { LiveStorage } from '@mswjs/storage'
import { HabitTasksDto } from '../../app/features/habits/infrastructure/habit-tasks.dto'
import { DateTime } from '../../app/core/datetime/datetime'
import { IsoDate } from '../../app/core/datetime/iso-date'
import { Habit } from '../../app/features/habits/domain/habit'
import { UpdateHabitTasks } from '../../app/features/habits/features/update-habit/domain/update-habit-tasks'
import { withAuth } from './middlewares/withAuth'
import { HabitMother } from '../mothers/habit.mother'

const generateHabitsTaskForInterval = (habits: Habit[], from: DateTime | null, to: DateTime) => {
  const newDates: HabitTasksDto[] = []
  while (from?.format('DD-LL-YY') !== to.format('DD-LL-YY')) {
    from = from?.plus({ day: 1 }) || null
    if (!from) {
      return []
    }
    const habitTask: HabitTasksDto = {
      date: from.toISO() as IsoDate,
      tasks: habits.map(habit => ({ habit, done: false })),
    }
    newDates.push(habitTask)
  }
  return newDates
}

function getInitialHabitTasks() {
  const habits = HabitMother.habits()
  const today = DateTime.fromNow()
  const lastDate = DateTime.fromISO('2024-03-21')
  const habitTasks = generateHabitsTaskForInterval(habits, lastDate, today)
  return habitTasks
}

export const habitTasks = new LiveStorage<HabitTasksDto[]>('habitTasks', getInitialHabitTasks())

export const habitTasksHandler = [
  http.get<never, never, HabitTasksDto[]>(
    api('habit-tasks'),
    withAuth(() => {
      const habitTasksValue = habitTasks.getValue()
      return HttpResponse.json(habitTasksValue, {
        status: 200,
      })
    }),
  ),
  http.put<never, UpdateHabitTasks, HabitTasksDto[]>(
    api('habit-tasks/:id'),
    withAuth(async ({ request }) => {
      const data = await request.json()
      const res: HabitTasksDto[] = habitTasks.getValue().map(habitTask =>
        JSON.stringify(habitTask.date) !== JSON.stringify(data.date)
          ? habitTask
          : {
              ...habitTask,
              tasks: habitTask.tasks.map(task =>
                task.habit.id !== data.updatedTask.habit.id ? task : { ...task, ...data.updatedTask },
              ),
            },
      )
      habitTasks.update(() => res)
      return HttpResponse.json(res, {
        status: 200,
      })
    }),
  ),
]
