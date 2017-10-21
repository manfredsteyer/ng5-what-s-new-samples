import { CustomFormDirective } from './custom-form.directive';
import { NgControl } from '@angular/forms';
import { Directive, HostListener, Input, Optional, Self } from '@angular/core';

@Directive({
  selector: '[blurCity]'
})
export class AdvancedBlurCityValidationDirective {

  @Input('blurCity') validCities: string[] = [];

  constructor(
    @Self() private control: NgControl,
    @Optional() private customForm: CustomFormDirective) 
  {
    control.valueChanges.first().subscribe(v => this.validate(v));
  }

  @HostListener('blur', ['$event.target.value'])
  blur(value) {
    this.validate(value);
  }

  validate(value) {
    let errors = this.control.errors || {};
    if (this.validCities.indexOf(value) > -1) {
      delete errors['city'];
      this.customForm.removeError(this.control.name, 'city');
    }
    else {
      errors['city'] = true;
      this.customForm.setError(this.control.name, 'city');
    }

    if (Object.keys(errors).length === 0) {
      errors = null;
    }

    this.control.control.setErrors(errors);
  }

}