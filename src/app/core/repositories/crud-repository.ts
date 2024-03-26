import { Creatable } from './creatable'
import { FindableAll } from './findable-all'
import { Deleatable } from './deleatable'
import { Updatable } from './updatable'
import { FindableOne } from './findable-one'

export interface CrudRepository<Create, ReturnAll, Update, ReturnOne>
  extends Creatable<Create>,
    Updatable<Update>,
    FindableAll<ReturnAll>,
    FindableOne<ReturnOne>,
    Deleatable {}
