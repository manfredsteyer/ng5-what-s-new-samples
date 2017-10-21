var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
var BookingDetailsComponent = /** @class */ (function () {
    function BookingDetailsComponent(translate) {
        this.translate = translate;
        this.bookings = [
            {
                from: 'Graz',
                to: 'Hamburg',
                passengers: 3,
                children: 1,
                returnFlight: 'yes',
                date: new Date('2016-04-26T12:00')
            },
            {
                from: 'Graz',
                to: 'Hamburg',
                passengers: 1,
                children: 0,
                returnFlight: 'no',
                date: new Date('2016-05-27T12:00')
            },
            {
                from: 'Hamburg',
                to: 'Graz',
                passengers: 6,
                children: 4,
                returnFlight: 'no',
                date: new Date('2016-08-21T12:00')
            }
        ];
        this.params = {
            direction: '=>',
            age: '<12'
        };
    }
    BookingDetailsComponent.prototype.selectLang = function (lang) {
        this.translate.use(lang);
    };
    BookingDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.translate.get('BOOKINGS').subscribe(function (res) { return _this.bookingTranslation = res; });
        this.translate.onLangChange.subscribe(function (event) {
            _this.translate.get('BOOKINGS').subscribe(function (res) { return _this.bookingTranslation = res; });
        });
    };
    BookingDetailsComponent = __decorate([
        Component({
            templateUrl: './booking-details.component.html'
        }),
        __metadata("design:paramtypes", [TranslateService])
    ], BookingDetailsComponent);
    return BookingDetailsComponent;
}());
export { BookingDetailsComponent };
//# sourceMappingURL=booking-details.component.js.map