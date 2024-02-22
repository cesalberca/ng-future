import { TestBed } from '@angular/core/testing'

import { HabitsHttpRepository } from './habits-http.repository'

describe('HabitsHttpRepositoryService', () => {
  let service: HabitsHttpRepository

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(HabitsHttpRepository)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
