var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ANIMATIONS } from './flight-card.animations';
var FlightCardComponent = /** @class */ (function () {
    function FlightCardComponent() {
        this.selectedItemChange = new EventEmitter();
        this.specialAnimationStatus = new EventEmitter();
        this.hoverState = false;
    }
    FlightCardComponent.prototype.isSelected = function () {
        if (this.selectedItem) {
            return this.selectedItem === this.item ? 'yes' : 'no';
        }
    };
    FlightCardComponent.prototype.toggleHover = function () {
        this.hoverState = !this.hoverState;
    };
    FlightCardComponent.prototype.setStatus = function (event) {
        this.specialAnimationStatus.emit(event);
    };
    FlightCardComponent.prototype.select = function () {
        this.selectedItemChange.emit(this.item);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], FlightCardComponent.prototype, "item", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], FlightCardComponent.prototype, "selectedItem", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], FlightCardComponent.prototype, "selectedItemChange", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], FlightCardComponent.prototype, "specialAnimationStatus", void 0);
    FlightCardComponent = __decorate([
        Component({
            selector: 'flight-card',
            templateUrl: './flight-card.component.html',
            animations: ANIMATIONS
        })
    ], FlightCardComponent);
    return FlightCardComponent;
}());
export { FlightCardComponent };
//# sourceMappingURL=flight.card.component.js.map