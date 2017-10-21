var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { DataDrivenTabComponent } from './data-driven-tab.component';
import { Component } from '@angular/core';
var DataDrivenDetailTabComponent = /** @class */ (function (_super) {
    __extends(DataDrivenDetailTabComponent, _super);
    function DataDrivenDetailTabComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataDrivenDetailTabComponent.prototype, "currentItem", {
        get: function () {
            return this.tabbedPaneService.currentItem;
        },
        enumerable: true,
        configurable: true
    });
    DataDrivenDetailTabComponent = __decorate([
        Component({
            selector: 'flight-dd-detail-tab',
            template: "\n        <div *ngIf=\"visible\">\n            <h2>{{ title }}</h2>\n            <pre>{{ currentItem | json }}</pre>\n        </div>\n    "
        })
    ], DataDrivenDetailTabComponent);
    return DataDrivenDetailTabComponent;
}(DataDrivenTabComponent));
export { DataDrivenDetailTabComponent };
//# sourceMappingURL=data-driven-detail-tab.component.js.map