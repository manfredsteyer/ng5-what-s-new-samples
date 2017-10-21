var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
var InvoicesService = /** @class */ (function () {
    function InvoicesService() {
        if (InvoicesService_1.invoices) {
            return;
        }
        InvoicesService_1.invoices = [
            {
                invoiceId: 1,
                date: new Date().toISOString().substr(0, 10),
                price: 300,
                from: 'Graz',
                to: 'Frankfurt',
                paid: true
            },
            {
                invoiceId: 2,
                date: new Date().toISOString().substr(0, 10),
                price: 350,
                from: 'Graz',
                to: 'Hamburg',
                paid: false
            },
            {
                invoiceId: 3,
                date: new Date().toISOString().substr(0, 10),
                price: 290,
                from: 'Graz',
                to: 'Zürich',
                paid: true
            },
            {
                invoiceId: 4,
                date: new Date().toISOString().substr(0, 10),
                price: 450,
                from: 'Graz',
                to: 'Frankfurt',
                paid: false
            }
        ];
    }
    InvoicesService_1 = InvoicesService;
    InvoicesService.prototype.findAll = function () {
        return InvoicesService_1.invoices;
    };
    InvoicesService.prototype.findOpen = function () {
        return InvoicesService_1.invoices.filter(function (inv) { return inv.invoiceId % 2 === 0; });
    };
    InvoicesService.prototype.findClosed = function () {
        return InvoicesService_1.invoices.filter(function (inv) { return inv.invoiceId % 2 === 1; });
    };
    InvoicesService = InvoicesService_1 = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [])
    ], InvoicesService);
    return InvoicesService;
    var InvoicesService_1;
}());
export { InvoicesService };
//# sourceMappingURL=invoices.service.js.map