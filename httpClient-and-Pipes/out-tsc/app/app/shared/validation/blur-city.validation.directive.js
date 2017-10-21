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
import { NgControl } from '@angular/forms';
import { Directive, HostListener, Input, Self } from '@angular/core';
var BlurCityValidationDirective = /** @class */ (function () {
    function BlurCityValidationDirective(control) {
        var _this = this;
        this.control = control;
        this.validCities = [];
        control.valueChanges.first().subscribe(function (v) { return _this.validate(v); });
    }
    BlurCityValidationDirective.prototype.blur = function (value) {
        this.validate(value);
    };
    BlurCityValidationDirective.prototype.validate = function (value) {
        var errors = this.control.errors || {};
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
    };
    __decorate([
        Input('blurCity'),
        __metadata("design:type", Array)
    ], BlurCityValidationDirective.prototype, "validCities", void 0);
    __decorate([
        HostListener('blur', ['$event.target.value']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], BlurCityValidationDirective.prototype, "blur", null);
    BlurCityValidationDirective = __decorate([
        Directive({
            selector: '[blurCity]'
        }),
        __param(0, Self()),
        __metadata("design:paramtypes", [NgControl])
    ], BlurCityValidationDirective);
    return BlurCityValidationDirective;
}());
export { BlurCityValidationDirective };
//# sourceMappingURL=blur-city.validation.directive.js.map