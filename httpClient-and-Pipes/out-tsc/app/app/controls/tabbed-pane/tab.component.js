var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, Input, Optional } from '@angular/core';
import { TabbedPaneComponent } from './tabbed-pane.component';
var TabComponent = /** @class */ (function () {
    function TabComponent(tabs) {
        this.tabs = tabs;
        this.visible = false;
    }
    TabComponent.prototype.ngOnInit = function () {
        if (this.tabs) {
            this.tabs.register(this);
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], TabComponent.prototype, "title", void 0);
    TabComponent = __decorate([
        Component({
            selector: 'flight-tab',
            template: "\n        <div *ngIf=\"visible\">\n            <h2>{{title}}</h2>\n            <ng-content></ng-content>\n        </div>\n    "
        }),
        __param(0, Optional()),
        __metadata("design:paramtypes", [TabbedPaneComponent])
    ], TabComponent);
    return TabComponent;
}());
export { TabComponent };
//# sourceMappingURL=tab.component.js.map