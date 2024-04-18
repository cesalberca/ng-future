import { Directive, Inject, Injector, OnInit } from '@angular/core'

import {
  ControlValueAccessor,
  FormControl,
  FormControlDirective,
  FormControlName,
  FormGroupDirective,
  NgControl,
  Validators,
} from '@angular/forms'

@Directive({
  selector: '[appControlValueAccessor]',
  standalone: true,
})
export class ControlValueAccessorDirective<T> implements ControlValueAccessor, OnInit {
  control!: FormControl
  isRequired = false
  onChange!: (value: T | null) => T

  isDisabled = false
  onTouched!: () => T

  constructor(@Inject(Injector) private injector: Injector) {}

  ngOnInit(): void {
    this.setFormControl()
    this.isRequired = this.control?.hasValidator(Validators.required) ?? false
  }

  setFormControl() {
    try {
      const formControl = this.injector.get(NgControl)

      switch (formControl.constructor) {
        case FormControlName:
          this.control = this.injector.get(FormGroupDirective).getControl(formControl as FormControlName)
          break
        default:
          this.control = (formControl as FormControlDirective).form as FormControl
          break
      }
    } catch (err) {
      this.control = new FormControl()
    }
  }

  writeValue(value: T): void {
    if (this.control) {
      this.control.setValue(value)
    } else {
      this.control = new FormControl(value)
    }
  }

  registerOnChange(fn: (value: T | null) => T): void {
    this.onChange = fn
  }

  registerOnTouched(fn: () => T): void {
    this.onTouched = fn
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled
  }
}
