import { ComponentFixture, TestBed } from '@angular/core/testing'

import { HabitsPage } from './habits-page.component'

describe('HabitsComponent', () => {
  let component: HabitsPage
  let fixture: ComponentFixture<HabitsPage>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HabitsPage],
    }).compileComponents()

    fixture = TestBed.createComponent(HabitsPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
