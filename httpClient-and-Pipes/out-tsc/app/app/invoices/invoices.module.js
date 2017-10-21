var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoicesSearchWithDataDrivenTabsComponent } from './invoices-search-with-dd-tabs.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { INVOICES_ROUTES_CONFIG } from './invoices.routes';
import { TabbedPaneModule } from '../controls/tabbed-pane/tabbed-pane.module';
import { DataDrivenTabbedPaneModule } from '../controls/data-driven-tabbed-pane/data-driven-tabbed-pane.module';
import { InvoicesSearchWithAltTabsComponent } from './invoices-search-with-alt-tabs.component';
import { InvoicesSearchWithTabsComponent } from './invoices-search-with-tabs.component';
import { InvoicesSearchFirstStepsPartialComponent } from './invoices-search-first-steps-partial.component';
import { ExtendedDataDrivenTabbedPaneModule } from '../controls/ext-data-driven-tabbed-pane/ext-data-driven-tabbed-pane.module';
import { InvoicesSearchWithExtendedDataDrivenTabsComponent } from './invoices-search-with-ext-dd-tabs.component';
var InvoicesModule = /** @class */ (function () {
    function InvoicesModule() {
    }
    InvoicesModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                RouterModule.forChild(INVOICES_ROUTES_CONFIG),
                TabbedPaneModule,
                DataDrivenTabbedPaneModule,
                ExtendedDataDrivenTabbedPaneModule
            ],
            declarations: [
                InvoicesSearchWithTabsComponent,
                InvoicesSearchWithAltTabsComponent,
                InvoicesSearchWithDataDrivenTabsComponent,
                InvoicesSearchWithExtendedDataDrivenTabsComponent,
                InvoicesSearchFirstStepsPartialComponent
            ]
        })
    ], InvoicesModule);
    return InvoicesModule;
}());
export { InvoicesModule };
//# sourceMappingURL=invoices.module.js.map