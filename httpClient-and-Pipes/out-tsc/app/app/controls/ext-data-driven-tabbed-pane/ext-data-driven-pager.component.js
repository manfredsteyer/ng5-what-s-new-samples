var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ExtendedAdvancedTabbedPaneService } from './ext-data-driven-tabbed-pane.service';
var ExtendedDataDrivenPagerComponent = /** @class */ (function () {
    function ExtendedDataDrivenPagerComponent(tabbedPaneService) {
        this.tabbedPaneService = tabbedPaneService;
        this.currentPageChange = new EventEmitter();
    }
    Object.defineProperty(ExtendedDataDrivenPagerComponent.prototype, "label", {
        get: function () {
            return this.tabbedPaneService.currentLabel;
        },
        enumerable: true,
        configurable: true
    });
    ExtendedDataDrivenPagerComponent.prototype.prev = function () {
        if (this.currentPage === 0) {
            return;
        }
        this.currentPageChange.next(this.currentPage - 1);
    };
    ExtendedDataDrivenPagerComponent.prototype.next = function () {
        if ((this.currentPage + 1) === this.pageCount) {
            return;
        }
        this.currentPageChange.next(this.currentPage + 1);
    };
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], ExtendedDataDrivenPagerComponent.prototype, "currentPage", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], ExtendedDataDrivenPagerComponent.prototype, "pageCount", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], ExtendedDataDrivenPagerComponent.prototype, "currentPageChange", void 0);
    ExtendedDataDrivenPagerComponent = __decorate([
        Component({
            selector: 'flight-ext-dd-pager',
            template: "\n        <button class=\"btn btn-default\" (click)=\"prev()\">&lt;&lt;</button>\n        Tab #{{currentPage + 1}}\n        <span *ngIf=\"label\">(Current Record: {{label}})</span>\n        <button class=\"btn btn-default\" (click)=\"next()\">&gt;&gt;</button>\n    "
        }),
        __metadata("design:paramtypes", [ExtendedAdvancedTabbedPaneService])
    ], ExtendedDataDrivenPagerComponent);
    return ExtendedDataDrivenPagerComponent;
}());
export { ExtendedDataDrivenPagerComponent };
//# sourceMappingURL=ext-data-driven-pager.component.js.map