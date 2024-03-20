import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ErrorToasterComponent } from './error-toaster.component'

describe('ErrorToasterComponent', () => {
  let component: ErrorToasterComponent
  let fixture: ComponentFixture<ErrorToasterComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorToasterComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(ErrorToasterComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
