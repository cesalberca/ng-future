import { HabitTask } from '../features/habit-tasks/domain/habit-task'

import { IsoDate } from '../../../core/datetime/iso-date'

export type HabitTasksDto = Omit<HabitTask, 'date'> & { date: IsoDate }
