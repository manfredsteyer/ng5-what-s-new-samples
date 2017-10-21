var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, TemplateRef, Input } from '@angular/core';
import { ExtendedDataDrivenListTabComponent } from './ext-data-driven-list-tab.component';
var DynamicFieldDirective = /** @class */ (function () {
    function DynamicFieldDirective(templateRef, parent) {
        this.templateRef = templateRef;
        this.parent = parent;
    }
    DynamicFieldDirective.prototype.ngOnInit = function () {
        this.parent.registerDynamicField(this);
    };
    __decorate([
        Input('flightDynamicFieldOf'),
        __metadata("design:type", String)
    ], DynamicFieldDirective.prototype, "propertyName", void 0);
    DynamicFieldDirective = __decorate([
        Directive({
            selector: '[flightDynamicField]'
        }),
        __metadata("design:paramtypes", [TemplateRef, ExtendedDataDrivenListTabComponent])
    ], DynamicFieldDirective);
    return DynamicFieldDirective;
}());
export { DynamicFieldDirective };
//# sourceMappingURL=dynamic-field.directive.js.map