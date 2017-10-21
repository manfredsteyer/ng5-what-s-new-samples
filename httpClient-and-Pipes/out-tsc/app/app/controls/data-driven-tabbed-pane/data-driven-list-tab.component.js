var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { DataDrivenTabbedPaneComponent } from './data-driven-tabbed-pane.component';
import { Component, Input } from '@angular/core';
import { AdvancedTabbedPaneService } from './data-driven-tabbed-pane.service';
var DataDrivenListTabComponent = /** @class */ (function () {
    function DataDrivenListTabComponent(tabs, tabbedPaneService) {
        this.tabs = tabs;
        this.tabbedPaneService = tabbedPaneService;
        this.visible = false;
    }
    DataDrivenListTabComponent.prototype.ngOnInit = function () {
        this.tabs.register(this);
    };
    Object.defineProperty(DataDrivenListTabComponent.prototype, "items", {
        get: function () {
            return this.tabbedPaneService.items;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataDrivenListTabComponent.prototype, "displayProperties", {
        get: function () {
            return this.tabbedPaneService.displayProperties;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataDrivenListTabComponent.prototype, "currentItem", {
        get: function () {
            return this.tabbedPaneService.currentItem;
        },
        enumerable: true,
        configurable: true
    });
    DataDrivenListTabComponent.prototype.select = function (item) {
        this.tabbedPaneService.currentItem = item;
        this.tabbedPaneService.currentLabel = item[this.displayProperties[0]];
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], DataDrivenListTabComponent.prototype, "title", void 0);
    DataDrivenListTabComponent = __decorate([
        Component({
            selector: 'flight-dd-list-tab',
            styles: ["\n        a {\n            cursor: pointer;\n            text-decoration: underline;\n        }\n    "],
            template: "\n        <div *ngIf=\"visible\">\n            <h2>{{title}}</h2>\n\n            <table class=\"table\">\n                <tr *ngFor=\"let item of items\" [class.active]=\"item == currentItem\">\n                    <td *ngFor=\"let p of displayProperties\">{{item[p]}}</td>\n                    <td><a (click)=\"select(item)\">Select</a></td>\n                </tr>\n            </table>\n        </div>\n    "
        }),
        __metadata("design:paramtypes", [DataDrivenTabbedPaneComponent,
            AdvancedTabbedPaneService])
    ], DataDrivenListTabComponent);
    return DataDrivenListTabComponent;
}());
export { DataDrivenListTabComponent };
//# sourceMappingURL=data-driven-list-tab.component.js.map