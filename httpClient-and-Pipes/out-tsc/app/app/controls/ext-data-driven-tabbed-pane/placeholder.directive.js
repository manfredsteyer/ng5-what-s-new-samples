var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, TemplateRef, Input, ViewContainerRef } from '@angular/core';
var PlaceholderDirective = /** @class */ (function () {
    function PlaceholderDirective(viewContainer) {
        this.viewContainer = viewContainer;
    }
    PlaceholderDirective.prototype.ngOnInit = function () {
        var context = { $implicit: this.value };
        this.viewContainer.createEmbeddedView(this.flightPlaceholder, context);
    };
    __decorate([
        Input(),
        __metadata("design:type", TemplateRef)
    ], PlaceholderDirective.prototype, "flightPlaceholder", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], PlaceholderDirective.prototype, "value", void 0);
    PlaceholderDirective = __decorate([
        Directive({
            selector: '[flightPlaceholder]'
        }),
        __metadata("design:paramtypes", [ViewContainerRef])
    ], PlaceholderDirective);
    return PlaceholderDirective;
}());
export { PlaceholderDirective };
//# sourceMappingURL=placeholder.directive.js.map