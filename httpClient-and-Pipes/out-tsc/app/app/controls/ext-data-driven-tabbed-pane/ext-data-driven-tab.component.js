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
import { ExtendedDataDrivenTabbedPaneComponent } from './ext-data-driven-tabbed-pane.component';
import { ExtendedAdvancedTabbedPaneService } from './ext-data-driven-tabbed-pane.service';
var ExtendedDataDrivenTabComponent = /** @class */ (function () {
    function ExtendedDataDrivenTabComponent(tabs, tabbedPaneService) {
        this.tabs = tabs;
        this.tabbedPaneService = tabbedPaneService;
        this.visible = false;
    }
    ExtendedDataDrivenTabComponent.prototype.ngOnInit = function () {
        console.log('register', this);
        this.tabs.register(this);
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ExtendedDataDrivenTabComponent.prototype, "title", void 0);
    ExtendedDataDrivenTabComponent = __decorate([
        Component({
            selector: 'flight-ext-dd-tab',
            template: "\n        <div *ngIf=\"visible\">\n            <h2>{{title}}</h2>\n            <ng-content></ng-content>\n        </div>\n    "
        }),
        __metadata("design:paramtypes", [ExtendedDataDrivenTabbedPaneComponent,
            ExtendedAdvancedTabbedPaneService])
    ], ExtendedDataDrivenTabComponent);
    return ExtendedDataDrivenTabComponent;
}());
export { ExtendedDataDrivenTabComponent };
//# sourceMappingURL=ext-data-driven-tab.component.js.map