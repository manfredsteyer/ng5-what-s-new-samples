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
import { ExtendedAdvancedTabbedPaneService } from './ext-data-driven-tabbed-pane.service';
var ExtendedDataDrivenTabbedPaneComponent = /** @class */ (function () {
    function ExtendedDataDrivenTabbedPaneComponent(tabbedPaneService) {
        this.tabbedPaneService = tabbedPaneService;
        this.tabs = [];
        this.currentPage = 0;
        this.items = [];
        this.displayProperties = [];
    }
    ExtendedDataDrivenTabbedPaneComponent.prototype.ngOnInit = function () {
        this.tabbedPaneService.items = this.items;
        this.tabbedPaneService.displayProperties = this.displayProperties;
    };
    Object.defineProperty(ExtendedDataDrivenTabbedPaneComponent.prototype, "tabsArray", {
        get: function () {
            return this.tabs;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtendedDataDrivenTabbedPaneComponent.prototype, "tabsCount", {
        get: function () {
            if (this.tabs) {
                return this.tabs.length;
            }
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    ExtendedDataDrivenTabbedPaneComponent.prototype.register = function (tab) {
        this.tabs.push(tab);
    };
    ExtendedDataDrivenTabbedPaneComponent.prototype.activate = function (active) {
        for (var _i = 0, _a = this.tabs; _i < _a.length; _i++) {
            var tab = _a[_i];
            tab.visible = (tab === active);
        }
        this.currentPage = this.tabs.indexOf(active);
    };
    ExtendedDataDrivenTabbedPaneComponent.prototype.activatePage = function (pageNumber) {
        this.currentPage = pageNumber;
        this.activate(this.tabs[pageNumber]);
    };
    ExtendedDataDrivenTabbedPaneComponent.prototype.ngAfterContentInit = function () {
        if (this.tabs.length === 0) {
            return;
        }
        this.activate(this.tabs[0]);
    };
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], ExtendedDataDrivenTabbedPaneComponent.prototype, "items", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], ExtendedDataDrivenTabbedPaneComponent.prototype, "displayProperties", void 0);
    ExtendedDataDrivenTabbedPaneComponent = __decorate([
        Component({
            selector: 'flight-ext-dd-tabbed-pane',
            providers: [ExtendedAdvancedTabbedPaneService],
            styles: ["\n        .tabbed-pane {\n            background-color:#f7ecb5;\n            padding:20px;\n        }\n\n        a {\n            cursor:pointer;\n            text-decoration: underline;\n        }\n    "],
            template: "\n        <div class=\"tabbed-pane\">\n\n            <span *ngFor=\"let tab of tabs\" style=\"padding-right:20px;\">\n                <a (click)=\"activate(tab)\">{{tab.title}}</a>\n            </span>\n\n            <ng-content></ng-content>\n\n            <flight-ext-dd-pager\n                [currentPage]=\"currentPage\"\n                (currentPageChange)=\"activatePage($event)\"\n                [pageCount]=\"tabsCount\">\n            </flight-ext-dd-pager>\n        </div>\n\n    "
        }),
        __metadata("design:paramtypes", [ExtendedAdvancedTabbedPaneService])
    ], ExtendedDataDrivenTabbedPaneComponent);
    return ExtendedDataDrivenTabbedPaneComponent;
}());
export { ExtendedDataDrivenTabbedPaneComponent };
//# sourceMappingURL=ext-data-driven-tabbed-pane.component.js.map