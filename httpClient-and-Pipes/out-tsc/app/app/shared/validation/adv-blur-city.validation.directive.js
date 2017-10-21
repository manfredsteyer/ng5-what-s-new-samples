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
import { CustomFormDirective } from './custom-form.directive';
import { NgControl } from '@angular/forms';
import { Directive, HostListener, Input, Optional, Self } from '@angular/core';
var AdvancedBlurCityValidationDirective = /** @class */ (function () {
    function AdvancedBlurCityValidationDirective(control, customForm) {
        var _this = this;
        this.control = control;
        this.customForm = customForm;
        this.validCities = [];
        control.valueChanges.first().subscribe(function (v) { return _this.validate(v); });
    }
    AdvancedBlurCityValidationDirective.prototype.blur = function (value) {
        this.validate(value);
    };
    AdvancedBlurCityValidationDirective.prototype.validate = function (value) {
        var errors = this.control.errors || {};
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
    };
    __decorate([
        Input('blurCity'),
        __metadata("design:type", Array)
    ], AdvancedBlurCityValidationDirective.prototype, "validCities", void 0);
    __decorate([
        HostListener('blur', ['$event.target.value']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AdvancedBlurCityValidationDirective.prototype, "blur", null);
    AdvancedBlurCityValidationDirective = __decorate([
        Directive({
            selector: '[blurCity]'
        }),
        __param(0, Self()),
        __param(1, Optional()),
        __metadata("design:paramtypes", [NgControl,
            CustomFormDirective])
    ], AdvancedBlurCityValidationDirective);
    return AdvancedBlurCityValidationDirective;
}());
export { AdvancedBlurCityValidationDirective };
//# sourceMappingURL=adv-blur-city.validation.directive.js.map