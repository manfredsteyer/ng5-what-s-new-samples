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
import { FlightService } from '../services/flight.service';
import { FormBuilder } from '@angular/forms';
var FlightSearchReactiveComponent = /** @class */ (function () {
    function FlightSearchReactiveComponent(flightService, fb) {
        this.flightService = flightService;
        this.fb = fb;
    }
    FlightSearchReactiveComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filter = this.fb.group({
            'from': ['Graz'],
            'to': ['Hamburg']
        });
        this
            .filter
            .valueChanges
            .debounceTime(300)
            .map(function (values) { return values.from == values.to; })
            .map(function (same) { return (same) ? { roundTrip: true } : {}; })
            .subscribe(function (errors) {
            _this.filter.setErrors(errors);
        });
    };
    Object.defineProperty(FlightSearchReactiveComponent.prototype, "flights", {
        get: function () {
            return this.flightService.flights;
        },
        enumerable: true,
        configurable: true
    });
    FlightSearchReactiveComponent.prototype.select = function (f) {
        this.selectedFlight = f;
    };
    FlightSearchReactiveComponent.prototype.search = function () {
        var value = this.filter.value;
        this.flightService
            .find(value.from, value.to);
    };
    FlightSearchReactiveComponent = __decorate([
        Component({
            selector: 'flight-search-reactive',
            templateUrl: 'flight-search-reactive.component.html',
            providers: [FlightService],
            styleUrls: ['flight-search-reactive.component.css']
        }),
        __metadata("design:paramtypes", [FlightService,
            FormBuilder])
    ], FlightSearchReactiveComponent);
    return FlightSearchReactiveComponent;
}());
export { FlightSearchReactiveComponent };
//# sourceMappingURL=flight-search-reactive.component.js.map