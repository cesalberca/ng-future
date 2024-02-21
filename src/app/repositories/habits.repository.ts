import { Inject, Injectable } from '@angular/core'
import { InjectionTokens } from '../tokens/injection-tokens'
import { CreateHabit } from '../models/create-habit'

@Injectable({
  providedIn: 'root',
})
export class HabitsRepository {
  constructor(@Inject(InjectionTokens.STORAGE) private readonly storage: Storage) {}

  save(createHabit: CreateHabit) {
    this.storage.setItem('habits', JSON.stringify(createHabit))
  }
}
