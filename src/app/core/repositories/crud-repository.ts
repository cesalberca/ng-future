import { Creatable } from './creatable'
import { FindableAll } from './findable-all'
import { Deleatable } from './deleatable'

export interface CrudRepository<Create, Return> extends Creatable<Create>, FindableAll<Return>, Deleatable {}
