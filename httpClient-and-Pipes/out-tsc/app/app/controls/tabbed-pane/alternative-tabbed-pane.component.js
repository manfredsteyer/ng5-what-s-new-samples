var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ContentChildren, QueryList, ViewChild } from '@angular/core';
import { AlternativeTabComponent } from './alternative-tab.component';
import { PagerComponent } from './pager.component';
var AlternativeTabbedPaneComponent = /** @class */ (function () {
    function AlternativeTabbedPaneComponent() {
        this.currentPage = 0;
    }
    Object.defineProperty(AlternativeTabbedPaneComponent.prototype, "tabsArray", {
        // Use this Getter to get an array with all TabComponents
        get: function () {
            return this.tabs.toArray();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlternativeTabbedPaneComponent.prototype, "tabsCount", {
        get: function () {
            if (!this.tabs) {
                return 0;
            }
            var array = this.tabs.toArray();
            if (!array) {
                return 0;
            }
            return array.length;
        },
        enumerable: true,
        configurable: true
    });
    AlternativeTabbedPaneComponent.prototype.ngAfterContentInit = function () {
        if (this.tabsArray.length === 0) {
            return;
        }
        this.activate(this.tabsArray[0]);
    };
    AlternativeTabbedPaneComponent.prototype.ngAfterViewInit = function () {
        this.pager.currentPage = 0;
    };
    AlternativeTabbedPaneComponent.prototype.activate = function (active) {
        for (var _i = 0, _a = this.tabsArray; _i < _a.length; _i++) {
            var tab = _a[_i];
            tab.visible = (tab === active);
        }
        this.currentPage = this.tabsArray.indexOf(active);
        this.pager.currentPage = this.currentPage;
    };
    AlternativeTabbedPaneComponent.prototype.activatePage = function (pageNumber) {
        this.currentPage = pageNumber;
        this.activate(this.tabsArray[pageNumber]);
    };
    __decorate([
        ContentChildren(AlternativeTabComponent),
        __metadata("design:type", QueryList)
    ], AlternativeTabbedPaneComponent.prototype, "tabs", void 0);
    __decorate([
        ViewChild('pager'),
        __metadata("design:type", PagerComponent)
    ], AlternativeTabbedPaneComponent.prototype, "pager", void 0);
    AlternativeTabbedPaneComponent = __decorate([
        Component({
            selector: 'flight-tabbed-pane-alt',
            styles: ["\n        .tabbed-pane {\n            background-color:#f7ecb5;\n            padding:20px;\n        }\n\n        a {\n            cursor:pointer;\n            text-decoration: underline;\n        }\n    "],
            // template: `
            //     <div class="tabbed-pane">
            //         <span *ngFor="let tab of tabs.toArray()" style="padding-right:20px;">
            //             <a (click)="activate(tab)">{{tab.title}}</a>
            //         </span>
            //
            //         <ng-content></ng-content>
            //
            //         <flight-pager
            //             #pager
            //             (currentPageChange)="activatePage($event)"
            //             [pageCount]="tabsArray.length">
            //         </flight-pager>
            //
            //     </div>
            // `
            template: "\n        <div class=\"tabbed-pane\">\n            \n            <ng-template [flightUnless]=\"tabsArray.length === 0\">\n                <div>\n                    Please choose for a tab.\n                </div>\n            </ng-template>\n\n            <div ngTemplate=\"flightUnless: tabsArray.length === 0\">\n                Please choose for a tab.\n            </div>\n\n            <div *flightUnless=\"tabsArray.length === 0\">\n                Please choose for a tab.\n            </div>\n\n            <span *ngFor=\"let tab of tabsArray\" style=\"padding-right:20px;\">\n                <a (click)=\"activate(tab)\">{{tab.title}}</a>\n            </span>\n            \n            <ng-template flightRepeate [flightRepeateOf]=\"tabsArray\" let-tab let-i=\"index\">\n                <span style=\"padding-right:20px;\">\n                    <a (click)=\"activate(tab)\">{{tab.title}} ({{i + 1}})</a>\n                </span>\n            </ng-template>\n\n            \n            <span template=\"flightRepeate: let tab of tabsArray; let i=index\" style=\"padding-right:20px;\">\n                            <a (click)=\"activate(tab)\">{{tab.title}} ({{i + 1}})</a>\n                        </span>\n                     \n            <span *flightRepeate=\"let tab of tabsArray; let i=index\" style=\"padding-right:20px;\">\n                <a (click)=\"activate(tab)\">{{tab.title}} ({{i + 1}})</a>\n            </span>\n   \n            <ng-content></ng-content>\n\n            <flight-pager\n                #pager\n                (currentPageChange)=\"activatePage($event)\"\n                [pageCount]=\"tabsArray.length\">\n            </flight-pager>\n\n        </div>\n    "
        }),
        __metadata("design:paramtypes", [])
    ], AlternativeTabbedPaneComponent);
    return AlternativeTabbedPaneComponent;
}());
export { AlternativeTabbedPaneComponent };
//# sourceMappingURL=alternative-tabbed-pane.component.js.map