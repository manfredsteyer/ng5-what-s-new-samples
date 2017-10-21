var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtendedDataDrivenTabbedPaneComponent } from './ext-data-driven-tabbed-pane.component';
import { ExtendedDataDrivenTabComponent } from './ext-data-driven-tab.component';
import { ExtendedDataDrivenPagerComponent } from './ext-data-driven-pager.component';
import { ExtendedDataDrivenListTabComponent } from './ext-data-driven-list-tab.component';
import { ExtendedDataDrivenDetailTabComponent } from './ext-data-driven-detail-tab.component';
import { DynamicFieldDirective } from './dynamic-field.directive';
import { PlaceholderDirective } from './placeholder.directive';
var ExtendedDataDrivenTabbedPaneModule = /** @class */ (function () {
    function ExtendedDataDrivenTabbedPaneModule() {
    }
    ExtendedDataDrivenTabbedPaneModule = __decorate([
        NgModule({
            imports: [
                CommonModule
            ],
            declarations: [
                ExtendedDataDrivenTabbedPaneComponent,
                ExtendedDataDrivenTabComponent,
                ExtendedDataDrivenPagerComponent,
                ExtendedDataDrivenListTabComponent,
                ExtendedDataDrivenDetailTabComponent,
                PlaceholderDirective,
                DynamicFieldDirective
            ],
            exports: [
                ExtendedDataDrivenTabbedPaneComponent,
                ExtendedDataDrivenTabComponent,
                ExtendedDataDrivenListTabComponent,
                ExtendedDataDrivenDetailTabComponent,
                DynamicFieldDirective
            ]
        })
    ], ExtendedDataDrivenTabbedPaneModule);
    return ExtendedDataDrivenTabbedPaneModule;
}());
export { ExtendedDataDrivenTabbedPaneModule };
//# sourceMappingURL=ext-data-driven-tabbed-pane.module.js.map