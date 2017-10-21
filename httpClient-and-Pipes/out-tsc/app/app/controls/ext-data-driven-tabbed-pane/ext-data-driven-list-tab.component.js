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
import { ExtendedDataDrivenTabComponent } from './ext-data-driven-tab.component';
import { Component } from '@angular/core';
var ExtendedDataDrivenListTabComponent = /** @class */ (function (_super) {
    __extends(ExtendedDataDrivenListTabComponent, _super);
    function ExtendedDataDrivenListTabComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dynamicFields = {};
        return _this;
        // Diese Wiederholung ist seit Version 2.3 nicht mehr
        // nötig, da Metadaten nun runtervererbt werden
        /*
        @Input() public title: string;
    
        constructor(public tabs: ExtendedDataDrivenTabbedPaneComponent) {
            super(tabs);
        }
    
        ngOnInit() {
            super.ngOnInit();
        }
        */
    }
    ExtendedDataDrivenListTabComponent.prototype.registerDynamicField = function (field) {
        this.dynamicFields[field.propertyName] = field;
    };
    Object.defineProperty(ExtendedDataDrivenListTabComponent.prototype, "items", {
        get: function () {
            return this.tabbedPaneService.items;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtendedDataDrivenListTabComponent.prototype, "displayProperties", {
        get: function () {
            return this.tabbedPaneService.displayProperties;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtendedDataDrivenListTabComponent.prototype, "currentItem", {
        get: function () {
            return this.tabbedPaneService.currentItem;
        },
        enumerable: true,
        configurable: true
    });
    ExtendedDataDrivenListTabComponent.prototype.select = function (item) {
        this.tabbedPaneService.currentItem = item;
        this.tabbedPaneService.currentLabel = item[this.displayProperties[0]];
    };
    ExtendedDataDrivenListTabComponent = __decorate([
        Component({
            selector: 'flight-ext-dd-list-tab',
            styles: ["\n        a {\n            cursor: pointer;\n            text-decoration: underline;\n        }\n    "],
            template: "\n        <div *ngIf=\"visible\">\n            <h2>{{title}}</h2>\n\n            <table class=\"table\">\n                <tr *ngFor=\"let item of items\" [class.active]=\"item == currentItem\">\n                    <td *ngFor=\"let p of displayProperties\">\n\n                        <span *ngIf=\"dynamicFields[p]\" [flightPlaceholder]=\"dynamicFields[p].templateRef\" [value]=\"item[p]\">\n                        </span>\n\n                        <span *ngIf=\"!dynamicFields[p]\">\n                            {{item[p]}}\n                        </span>\n\n                    </td>\n                    <td><a (click)=\"select(item)\">Select</a></td>\n                </tr>\n            </table>\n        </div>\n    "
        })
    ], ExtendedDataDrivenListTabComponent);
    return ExtendedDataDrivenListTabComponent;
}(ExtendedDataDrivenTabComponent));
export { ExtendedDataDrivenListTabComponent };
//# sourceMappingURL=ext-data-driven-list-tab.component.js.map