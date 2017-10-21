import { NgControl } from '@angular/forms';
import { Directive, HostListener, Input, Self } from '@angular/core';

@Directive({
  selector: '[blurCity]'
})
export class BlurCityValidationDirective {

  @Input('blurCity') validCities: string[] = [];

  constructor(@Self() private control: NgControl) {
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
    }
    else {
      errors['city'] = true;
    }

    if (Object.getOwnPropertyNames(errors).length === 0) {
      errors = null;
    }

    this.control.control.setErrors(errors);
  }

}