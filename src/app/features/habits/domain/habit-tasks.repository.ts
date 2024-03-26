import { FindableAll } from '../../../core/repositories/findable-all'
import { HabitTask } from '../features/habit-tasks/domain/habit-task'

export interface HabitTasksRepository extends FindableAll<HabitTask> {}
