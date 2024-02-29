import { ComponentFixture, TestBed } from '@angular/core/testing'

import { HabitPage } from './habit-page.component'

describe('HabitComponent', () => {
  let component: HabitPage
  let fixture: ComponentFixture<HabitPage>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HabitPage],
    }).compileComponents()

    fixture = TestBed.createComponent(HabitPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
