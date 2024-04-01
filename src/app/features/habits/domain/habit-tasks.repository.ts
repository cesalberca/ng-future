import { UpdateHabitTasks } from '../../../core/models/update-habit-tasks'
import { FindableAll } from '../../../core/repositories/findable-all'
import { Updatable } from '../../../core/repositories/updatable'
import { HabitTask } from '../features/habit-tasks/domain/habit-task'

export interface HabitTasksRepository extends FindableAll<HabitTask>, Updatable<UpdateHabitTasks, HabitTask[]> {}
