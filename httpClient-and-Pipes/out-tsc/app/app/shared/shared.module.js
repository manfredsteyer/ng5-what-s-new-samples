var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { AuthInterceptor } from './auth/auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdvancedBlurCityValidationDirective } from './validation/adv-blur-city.validation.directive';
import { CustomFormDirective } from './validation/custom-form.directive';
import { BlurCityValidationDirective } from './validation/blur-city.validation.directive';
import { DebouncingRoundtripValidatorDirective } from './validation/debouncing-roundtrip.validator.directive';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CityPipe } from './pipes/city.pipe';
import { CityValidatorDirective } from './validation/city.validator';
import { RoundTripDirective } from './validation/roundtrip.validator';
import { AsyncCityValidatorDirective } from './validation/async-city.validator';
import { DateComponent } from './date/date.component';
import { AuthGuard } from './auth/auth.guard';
import { LeaveComponentGuard } from './deactivation/leave-component-guard';
import { CustomPreloadingStrategy } from './preload/custom-preloading.strategy';
import { AuthChildGuard } from './auth/auth.child.guard';
import { AuthLoadGuard } from './auth/auth.load.guard';
import { AuthService } from './auth/auth.service';
import { E2eLocatorDirective } from './e2e-locator/e2e-locator.directive';
import { AnimationDriver } from '@angular/animations/browser';
import { CustomAnimationDriverFactory } from './animation/custom-animation-driver';
import { TranslateModule } from '@ngx-translate/core';
import { FlightClickWithWarningDirective } from './warning/flight-click-with-warning.directive';
import { RepeateDirective } from './structural/repeate.directive';
import { UnlessDirective } from './structural/unless.directive';
import { TooltipDirective } from './structural/tooltip.directive';
import { TooltipComponent } from './structural/tooltip.component';
import { Tooltip2Directive } from './structural/tooltip2.directive';
import { AdvancedAuthService } from './auth/advanced-auth.service';
import { ValidationErrorsComponent } from './validation/validation-errors.component';
import { DateControlComponent } from './date/date.control';
import { DateValueAccessorDirective } from './date/date-value-accessor';
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule_1 = SharedModule;
    SharedModule.forRoot = function () {
        return {
            providers: [
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: AuthInterceptor,
                    multi: true,
                },
                { provide: AuthService, useClass: AdvancedAuthService },
                AuthGuard,
                AuthLoadGuard,
                AuthChildGuard,
                LeaveComponentGuard,
                CustomPreloadingStrategy,
                { provide: AnimationDriver, useFactory: CustomAnimationDriverFactory }
            ],
            ngModule: SharedModule_1
        };
    };
    SharedModule = SharedModule_1 = __decorate([
        NgModule({
            imports: [
                FormsModule,
                CommonModule // ngFor, ngIf, ngStyle, ngClass, date, json
            ],
            declarations: [
                CityPipe,
                CityValidatorDirective,
                AsyncCityValidatorDirective,
                RoundTripDirective,
                DateComponent,
                DateControlComponent,
                DateValueAccessorDirective,
                E2eLocatorDirective,
                FlightClickWithWarningDirective,
                RepeateDirective,
                UnlessDirective,
                TooltipDirective,
                TooltipComponent,
                Tooltip2Directive,
                ValidationErrorsComponent,
                DebouncingRoundtripValidatorDirective,
                BlurCityValidationDirective,
                CustomFormDirective,
                AdvancedBlurCityValidationDirective
            ],
            exports: [
                CityPipe,
                CityValidatorDirective,
                AsyncCityValidatorDirective,
                RoundTripDirective,
                DateComponent,
                DateControlComponent,
                DateValueAccessorDirective,
                E2eLocatorDirective,
                TranslateModule,
                FlightClickWithWarningDirective,
                RepeateDirective,
                UnlessDirective,
                TooltipDirective,
                TooltipComponent,
                Tooltip2Directive,
                ValidationErrorsComponent,
                DebouncingRoundtripValidatorDirective,
                BlurCityValidationDirective,
                CustomFormDirective,
                AdvancedBlurCityValidationDirective
            ],
            entryComponents: [
                TooltipComponent
            ]
        })
    ], SharedModule);
    return SharedModule;
    var SharedModule_1;
}());
export { SharedModule };
//# sourceMappingURL=shared.module.js.map