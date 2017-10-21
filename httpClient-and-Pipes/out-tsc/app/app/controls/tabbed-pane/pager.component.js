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
var PagerComponent = /** @class */ (function () {
    function PagerComponent() {
        this.currentPageChange = new EventEmitter();
    }
    PagerComponent.prototype.prev = function () {
        if (this.currentPage === 0) {
            return;
        }
        this.currentPageChange.next(this.currentPage - 1);
    };
    PagerComponent.prototype.next = function () {
        if ((this.currentPage + 1) === this.pageCount) {
            return;
        }
        this.currentPageChange.next(this.currentPage + 1);
    };
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], PagerComponent.prototype, "currentPage", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], PagerComponent.prototype, "pageCount", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], PagerComponent.prototype, "currentPageChange", void 0);
    PagerComponent = __decorate([
        Component({
            selector: 'flight-pager',
            template: "\n        <button class=\"btn btn-default\" (click)=\"prev()\">&lt;&lt;</button>\n        Tab #{{currentPage + 1}}\n        <button class=\"btn btn-default\" (click)=\"next()\">&gt;&gt;</button>\n    "
        })
    ], PagerComponent);
    return PagerComponent;
}());
export { PagerComponent };
//# sourceMappingURL=pager.component.js.map