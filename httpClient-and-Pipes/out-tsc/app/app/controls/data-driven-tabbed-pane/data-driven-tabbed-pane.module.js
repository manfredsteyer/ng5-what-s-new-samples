var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataDrivenTabbedPaneComponent, DataDrivenTabComponent, DataDrivenPagerComponent, DataDrivenListTabComponent, DataDrivenDetailTabComponent, } from '../data-driven-tabbed-pane';
import { DataDrivenInheritanceListTabComponent } from './data-driven-inheritance-list-tab.component';
var DataDrivenTabbedPaneModule = /** @class */ (function () {
    function DataDrivenTabbedPaneModule() {
    }
    DataDrivenTabbedPaneModule = __decorate([
        NgModule({
            imports: [
                CommonModule
            ],
            declarations: [
                DataDrivenTabbedPaneComponent,
                DataDrivenTabComponent,
                DataDrivenPagerComponent,
                DataDrivenListTabComponent,
                DataDrivenDetailTabComponent,
                DataDrivenInheritanceListTabComponent
            ],
            exports: [
                DataDrivenTabbedPaneComponent,
                DataDrivenTabComponent,
                DataDrivenListTabComponent,
                DataDrivenDetailTabComponent,
                DataDrivenInheritanceListTabComponent
            ]
        })
    ], DataDrivenTabbedPaneModule);
    return DataDrivenTabbedPaneModule;
}());
export { DataDrivenTabbedPaneModule };
//# sourceMappingURL=data-driven-tabbed-pane.module.js.map