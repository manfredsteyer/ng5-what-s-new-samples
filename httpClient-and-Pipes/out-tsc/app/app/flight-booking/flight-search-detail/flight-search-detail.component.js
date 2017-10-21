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
import { ActivatedRoute } from '@angular/router';
import { FlightService } from '../services/flight.service';
var FlightSearchDetailComponent = /** @class */ (function () {
    function FlightSearchDetailComponent(flightService, route) {
        this.flightService = flightService;
        this.from = 'Graz';
        this.to = 'Hamburg';
        this.date = (new Date()).toISOString();
        this.animationInProgress = false;
        route.queryParams.subscribe(function (p) {
            // console.debug('queryParams', p);
        });
    }
    FlightSearchDetailComponent.prototype.ngOnInit = function () {
        this.luggageOptions = [
            { id: 0, name: 'No luggage' },
            { id: 1, name: '1 piece of luggage' },
            { id: 2, name: '2 pieces of luggage' }
        ];
        this.flightClasses = [
            { id: 1, name: '1st Class' },
            { id: 2, name: 'Business Class' },
            { id: 3, name: 'Economy Class' }
        ];
    };
    Object.defineProperty(FlightSearchDetailComponent.prototype, "flights", {
        // cmp.flights
        get: function () {
            return this.flightService.flights;
        },
        enumerable: true,
        configurable: true
    });
    FlightSearchDetailComponent.prototype.select = function (f) {
        this.selectedFlight = f;
    };
    FlightSearchDetailComponent.prototype.search = function () {
        // Leider unterstützt die Web API nur from und to
        // die anderen Felder werden hier aber ausgegeben
        // und dienen der Veranschaulichung
        console.debug('search', this);
        this.flightService
            .find(this.from, this.to);
        // .map(function(resp) { return resp.json() })
    };
    FlightSearchDetailComponent.prototype.disableButton = function (event) {
        this.animationInProgress = event.phaseName === 'start';
        console.log(event);
    };
    FlightSearchDetailComponent = __decorate([
        Component({
            selector: 'flight-search-detail',
            templateUrl: 'flight-search-detail.component.html',
            styleUrls: ['flight-search-detail.component.css']
        }),
        __metadata("design:paramtypes", [FlightService, ActivatedRoute])
    ], FlightSearchDetailComponent);
    return FlightSearchDetailComponent;
}());
export { FlightSearchDetailComponent };
//# sourceMappingURL=flight-search-detail.component.js.map