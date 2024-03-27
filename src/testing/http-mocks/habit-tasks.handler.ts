import { http, HttpResponse } from 'msw'
import { api } from './api'
import { LiveStorage } from '@mswjs/storage'
import { HabitTasksDtoMother } from '../../app/features/habits/infrastructure/habit-tasks-dto.mother'
import { HabitTasksDto } from '../../app/features/habits/infrastructure/habit-tasks.dto'
import { DateTime } from '../../app/core/datetime/datetime'
import { IsoDate } from '../../app/core/datetime/iso-date'
import { Habit } from '../../app/core/models/habit'

export const habitTasks = new LiveStorage<HabitTasksDto[]>('habitTasks', HabitTasksDtoMother.habitTasksDto())

const generateHabitsForInterval = (habits: Habit[], from: DateTime | null, to: DateTime) => {
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

export const habitTasksHandler = [
  http.get<never, never, HabitTasksDto[]>(api('habit-tasks'), () => {
    const habits = habitTasks.getValue()[0].tasks.map(task => task.habit) || []
    const today = DateTime.fromNow()
    const lastDate: DateTime | null = DateTime.fromDate(new Date(habitTasks.getValue()[0].date))

    const newDates: HabitTasksDto[] = generateHabitsForInterval(habits, lastDate, today)
    const res = [...newDates, ...habitTasks.getValue()].sort((a, b) =>
      DateTime.compareDates(DateTime.fromISO(a.date), DateTime.fromISO(b.date)),
    )
    habitTasks.update(() => res)
    return HttpResponse.json(res, {
      status: 200,
    })
  }),
]
