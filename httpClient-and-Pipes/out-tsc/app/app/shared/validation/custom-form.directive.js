var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive } from '@angular/core';
var CustomFormDirective = /** @class */ (function () {
    function CustomFormDirective() {
        this.errors = {};
        this.valid = true;
    }
    CustomFormDirective.prototype.toKey = function (controlName, ruleName) {
        return controlName + '.' + ruleName;
    };
    CustomFormDirective.prototype.setError = function (controlName, ruleName, value) {
        if (value === void 0) { value = true; }
        var key = this.toKey(controlName, ruleName);
        this.errors[key] = value;
        this.valid = false;
    };
    CustomFormDirective.prototype.removeError = function (controlName, ruleName) {
        var key = this.toKey(controlName, ruleName);
        delete this.errors[key];
        if (Object.getOwnPropertyNames(this.errors).length == 0) {
            this.valid = true;
        }
    };
    CustomFormDirective = __decorate([
        Directive({
            selector: 'form',
            exportAs: 'customForm'
        }),
        __metadata("design:paramtypes", [])
    ], CustomFormDirective);
    return CustomFormDirective;
}());
export { CustomFormDirective };
//# sourceMappingURL=custom-form.directive.js.map