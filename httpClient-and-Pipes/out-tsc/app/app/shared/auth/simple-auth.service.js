var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
var SimpleAuthService = /** @class */ (function () {
    function SimpleAuthService() {
        this._userName = '';
    }
    SimpleAuthService.prototype.login = function (loginName) {
        this._userName = loginName || 'Max';
    };
    SimpleAuthService.prototype.loginWithPassword = function (userName, password) {
        return Promise.reject('not implemented');
    };
    SimpleAuthService.prototype.logout = function () {
        this._userName = '';
    };
    Object.defineProperty(SimpleAuthService.prototype, "isLoggedIn", {
        get: function () {
            return this._userName !== '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleAuthService.prototype, "userName", {
        get: function () {
            return this._userName;
        },
        enumerable: true,
        configurable: true
    });
    SimpleAuthService = __decorate([
        Injectable()
    ], SimpleAuthService);
    return SimpleAuthService;
}());
export { SimpleAuthService };
//# sourceMappingURL=simple-auth.service.js.map