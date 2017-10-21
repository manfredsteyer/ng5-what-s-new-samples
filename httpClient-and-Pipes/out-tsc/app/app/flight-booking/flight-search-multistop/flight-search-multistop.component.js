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
import { FormBuilder, Validators } from '@angular/forms';
import { MultistopValidator } from '../../shared/validation/multistop-validator';
var FlightSearchMultistopComponent = /** @class */ (function () {
    function FlightSearchMultistopComponent(flightService, fb) {
        this.flightService = flightService;
        this.fb = fb;
        this.validators = [];
        this.validators = [
            Validators.required,
            Validators.minLength(3)
        ];
        this.filter = fb.group({
            'from': ['Graz', this.validators],
            'to': ['Hamburg', this.validators],
            'stopovers': fb.array([])
        });
        this.filter.get('stopovers').validator = MultistopValidator.validate;
    }
    Object.defineProperty(FlightSearchMultistopComponent.prototype, "flights", {
        get: function () {
            return this.flightService.flights;
        },
        enumerable: true,
        configurable: true
    });
    FlightSearchMultistopComponent.prototype.addStopover = function () {
        var stopovers = this.filter.controls['stopovers'];
        stopovers.push(this.fb.group({
            'city': ['', this.validators],
            'duration': ['1']
        }));
    };
    FlightSearchMultistopComponent.prototype.removeStopover = function () {
        var stopovers = this.filter.controls['stopovers'];
        stopovers.removeAt(stopovers.length - 1);
    };
    FlightSearchMultistopComponent.prototype.select = function (f) {
        this.selectedFlight = f;
    };
    FlightSearchMultistopComponent.prototype.search = function () {
        var value = this.filter.value;
        console.info('value', value);
        this.flightService
            .find(value.from, value.to);
        // .map(function(resp) { return resp.json() })
    };
    FlightSearchMultistopComponent = __decorate([
        Component({
            selector: 'flight-search-reactive',
            templateUrl: 'flight-search-multistop.component.html',
            providers: [FlightService],
            styleUrls: ['flight-search-multistop.component.css']
        }),
        __metadata("design:paramtypes", [FlightService,
            FormBuilder])
    ], FlightSearchMultistopComponent);
    return FlightSearchMultistopComponent;
}());
export { FlightSearchMultistopComponent };
//# sourceMappingURL=flight-search-multistop.component.js.map