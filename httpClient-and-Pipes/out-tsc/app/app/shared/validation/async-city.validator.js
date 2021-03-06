var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Directive } from '@angular/core';
import { NG_ASYNC_VALIDATORS } from '@angular/forms';
var AsyncCityValidatorDirective = /** @class */ (function () {
    function AsyncCityValidatorDirective() {
    }
    AsyncCityValidatorDirective_1 = AsyncCityValidatorDirective;
    AsyncCityValidatorDirective.prototype.validate = function (ctrl) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                if (ctrl.value === 'Graz' || ctrl.value === 'Hamburg') {
                    resolve({});
                    return;
                }
                resolve({ 'async-city': false });
            }, 100);
        });
    };
    AsyncCityValidatorDirective = AsyncCityValidatorDirective_1 = __decorate([
        Directive({
            selector: '[flightAsyncCity]',
            providers: [
                {
                    provide: NG_ASYNC_VALIDATORS,
                    useExisting: AsyncCityValidatorDirective_1,
                    multi: true
                }
            ]
        })
    ], AsyncCityValidatorDirective);
    return AsyncCityValidatorDirective;
    var AsyncCityValidatorDirective_1;
}());
export { AsyncCityValidatorDirective };
//# sourceMappingURL=async-city.validator.js.map