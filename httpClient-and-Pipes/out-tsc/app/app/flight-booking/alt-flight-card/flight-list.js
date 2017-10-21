var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
var FlightListComponent = /** @class */ (function () {
    function FlightListComponent() {
        this.flights = [];
        this.selectedFlightChange = new EventEmitter();
    }
    FlightListComponent.prototype.change = function (f) {
        this.selectedFlightChange.emit(f);
    };
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], FlightListComponent.prototype, "flights", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], FlightListComponent.prototype, "selectedFlight", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], FlightListComponent.prototype, "selectedFlightChange", void 0);
    FlightListComponent = __decorate([
        Component({
            selector: 'flight-list',
            template: "\n        <div class='row'>\n            <div *ngFor='let f of flights' class='col-sm-6 col-md-4 col-lg-3 '>\n                <flight-card-alt\n                             [item]='f'\n                             [selected]='f == selectedFlight'\n                             (selectedChange)='change(f)'>\n                </flight-card-alt>\n            </div>\n        </div>\n    "
        })
    ], FlightListComponent);
    return FlightListComponent;
}());
export { FlightListComponent };
//# sourceMappingURL=flight-list.js.map