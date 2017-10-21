var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { InvoicesService } from './invoices.service';
var InvoicesSearchWithTabsComponent = /** @class */ (function () {
    function InvoicesSearchWithTabsComponent(invoicesService) {
        this.invoicesService = invoicesService;
        this.invoicesOpen = [];
        this.invoicesPaid = [];
        this.page = 1;
    }
    InvoicesSearchWithTabsComponent.prototype.ngOnInit = function () {
        this.invoicesOpen = this.invoicesService.findOpen();
        this.invoicesPaid = this.invoicesService.findClosed();
    };
    InvoicesSearchWithTabsComponent = __decorate([
        Component({
            templateUrl: './invoices-search-with-tabs.component.html',
            providers: [InvoicesService]
        }),
        __metadata("design:paramtypes", [InvoicesService])
    ], InvoicesSearchWithTabsComponent);
    return InvoicesSearchWithTabsComponent;
}());
export { InvoicesSearchWithTabsComponent };
//# sourceMappingURL=invoices-search-with-tabs.component.js.map