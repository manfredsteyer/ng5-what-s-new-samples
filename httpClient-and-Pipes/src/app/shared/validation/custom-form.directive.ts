import { Directive } from '@angular/core';

@Directive({
  selector: 'form',
  exportAs: 'customForm'
})
export class CustomFormDirective {

  constructor() { }

  errors: object = {}
  valid: boolean = true;

  private toKey(controlName: string, ruleName: string): string {
    return controlName + '.' + ruleName;
  }

  setError(controlName: string, ruleName: string, value: any = true) {
    let key = this.toKey(controlName, ruleName);
    this.errors[key] = value;
    this.valid = false;
  }

  removeError(controlName: string, ruleName: string) {
    let key = this.toKey(controlName, ruleName);
    delete this.errors[key];
    if (Object.getOwnPropertyNames(this.errors).length == 0) {
      this.valid = true;
    }
  }

}