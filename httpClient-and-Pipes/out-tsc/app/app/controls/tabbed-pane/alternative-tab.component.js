var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
var AlternativeTabComponent = /** @class */ (function () {
    function AlternativeTabComponent() {
        this.visible = false;
    }
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], AlternativeTabComponent.prototype, "visible", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], AlternativeTabComponent.prototype, "title", void 0);
    AlternativeTabComponent = __decorate([
        Component({
            selector: 'flight-tab-alt',
            template: "\n        <div *ngIf=\"visible\">\n            <h2>{{title}}</h2>\n            <ng-content></ng-content>\n        </div>\n    "
        })
    ], AlternativeTabComponent);
    return AlternativeTabComponent;
}());
export { AlternativeTabComponent };
//# sourceMappingURL=alternative-tab.component.js.map