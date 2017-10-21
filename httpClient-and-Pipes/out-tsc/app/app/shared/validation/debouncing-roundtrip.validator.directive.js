var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { NgForm } from '@angular/forms';
import { Directive, Input, Self } from '@angular/core';
var DebouncingRoundtripValidatorDirective = /** @class */ (function () {
    function DebouncingRoundtripValidatorDirective(form) {
        this.debounceTimeMsec = 300;
        form.valueChanges
            .debounceTime(this.debounceTimeMsec)
            .map(function (values) { return values.from == values.to; })
            .map(function (same) { return (same) ? { roundTrip: true } : {}; })
            .subscribe(function (errors) {
            form.control.setErrors(errors);
        });
    }
    __decorate([
        Input('debouncingRoundTrip'),
        __metadata("design:type", Number)
    ], DebouncingRoundtripValidatorDirective.prototype, "debounceTimeMsec", void 0);
    DebouncingRoundtripValidatorDirective = __decorate([
        Directive({
            selector: '[debouncingRoundTrip]'
        }),
        __param(0, Self()),
        __metadata("design:paramtypes", [NgForm])
    ], DebouncingRoundtripValidatorDirective);
    return DebouncingRoundtripValidatorDirective;
}());
export { DebouncingRoundtripValidatorDirective };
//# sourceMappingURL=debouncing-roundtrip.validator.directive.js.map