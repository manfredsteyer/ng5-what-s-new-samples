var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { TabbedPaneComponent } from './tabbed-pane.component';
import { TabComponent } from './tab.component';
import { CommonModule } from '@angular/common';
import { PagerComponent } from './pager.component';
import { AlternativeTabbedPaneComponent } from './alternative-tabbed-pane.component';
import { AlternativeTabComponent } from './alternative-tab.component';
import { TabPrototypeComponent } from './tab-prototype.component';
import { SharedModule } from '../../shared/shared.module';
var TabbedPaneModule = /** @class */ (function () {
    function TabbedPaneModule() {
    }
    TabbedPaneModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                SharedModule
            ],
            declarations: [
                TabbedPaneComponent,
                TabComponent,
                AlternativeTabbedPaneComponent,
                AlternativeTabComponent,
                PagerComponent,
                TabPrototypeComponent
            ],
            exports: [
                TabbedPaneComponent,
                TabComponent,
                AlternativeTabbedPaneComponent,
                AlternativeTabComponent,
                TabPrototypeComponent
            ]
        })
    ], TabbedPaneModule);
    return TabbedPaneModule;
}());
export { TabbedPaneModule };
//# sourceMappingURL=tabbed-pane.module.js.map