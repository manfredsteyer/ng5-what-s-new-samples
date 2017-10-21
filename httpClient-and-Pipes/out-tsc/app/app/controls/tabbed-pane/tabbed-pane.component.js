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
var TabbedPaneComponent = /** @class */ (function () {
    function TabbedPaneComponent() {
        this.tabs = [];
        this.currentPage = 0;
        this.currentPageChange = new EventEmitter();
    }
    Object.defineProperty(TabbedPaneComponent.prototype, "tabsCount", {
        get: function () {
            if (!this.tabs) {
                return 0;
            }
            return this.tabs.length;
        },
        enumerable: true,
        configurable: true
    });
    TabbedPaneComponent.prototype.register = function (tab) {
        this.tabs.push(tab);
    };
    TabbedPaneComponent.prototype.activate = function (active) {
        for (var _i = 0, _a = this.tabs; _i < _a.length; _i++) {
            var tab = _a[_i];
            tab.visible = (tab === active);
        }
        this.currentPage = this.tabs.indexOf(active);
        this.currentPageChange.next(this.currentPage);
    };
    TabbedPaneComponent.prototype.activatePage = function (pageNumber) {
        this.currentPage = pageNumber;
        this.activate(this.tabs[pageNumber]);
    };
    TabbedPaneComponent.prototype.ngAfterContentInit = function () {
        if (this.tabs.length === 0) {
            return;
        }
        this.activate(this.tabs[this.currentPage]);
    };
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], TabbedPaneComponent.prototype, "currentPage", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], TabbedPaneComponent.prototype, "currentPageChange", void 0);
    TabbedPaneComponent = __decorate([
        Component({
            selector: 'flight-tabbed-pane',
            exportAs: 'flightTabbedPane',
            styles: ["\n        .tabbed-pane {\n            background-color:#f7ecb5;\n            padding:20px;\n        }\n\n        a {\n            cursor:pointer;\n            text-decoration: underline;\n        }\n    "],
            template: "\n        <div class=\"tabbed-pane\">\n            <span *ngFor=\"let tab of tabs\" style=\"padding-right:20px;\">\n                <a (click)=\"activate(tab)\">{{tab.title}}</a>\n            </span>\n\n\n            <ng-content></ng-content>\n\n            <flight-pager\n                [currentPage]=\"currentPage\"\n                (currentPageChange)=\"activatePage($event)\"\n                [pageCount]=\"tabsCount\">\n            </flight-pager>\n        </div>\n\n    "
        })
    ], TabbedPaneComponent);
    return TabbedPaneComponent;
}());
export { TabbedPaneComponent };
//# sourceMappingURL=tabbed-pane.component.js.map