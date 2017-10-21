import { NgControl, NgForm } from '@angular/forms';
import { Directive, Input, Self } from '@angular/core';

@Directive({
  selector: '[debouncingRoundTrip]'
})
export class DebouncingRoundtripValidatorDirective {

  @Input('debouncingRoundTrip') debounceTimeMsec: number = 300;

  constructor(@Self() form: NgForm) { 
    
    form.valueChanges
        .debounceTime(this.debounceTimeMsec)
        .map(values => values.from == values.to)
        .map(same => (same) ? { roundTrip: true } : {} )
        .subscribe(errors => {
            form.control.setErrors(errors);
        });
  }
 
}