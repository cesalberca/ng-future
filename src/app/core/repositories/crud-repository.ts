import { Creatable } from './creatable'
import { FindableAll } from './findable-all'
import { Deleatable } from './deleatable'
import { Updatable } from './updatable'

export interface CrudRepository<Create, Return, Update>
  extends Creatable<Create>,
    Updatable<Update>,
    FindableAll<Return>,
    Deleatable {}
