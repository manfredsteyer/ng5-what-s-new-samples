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
import { OAuthService } from 'angular-oauth2-oidc';
var AdvancedAuthService = /** @class */ (function () {
    function AdvancedAuthService(oauthService) {
        this.oauthService = oauthService;
    }
    AdvancedAuthService.prototype.login = function () {
        this.oauthService.clientId = 'spa-demo';
        this.oauthService.initImplicitFlow();
    };
    AdvancedAuthService.prototype.loginWithPassword = function (userName, password) {
        this.oauthService.clientId = 'demo-resource-owner';
        return this
            .oauthService
            .fetchTokenUsingPasswordFlowAndLoadUserProfile(userName, password);
    };
    AdvancedAuthService.prototype.logout = function () {
        this.oauthService.logOut();
    };
    Object.defineProperty(AdvancedAuthService.prototype, "isLoggedIn", {
        get: function () {
            return this.oauthService.hasValidAccessToken();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdvancedAuthService.prototype, "userName", {
        get: function () {
            var claims = this.oauthService.getIdentityClaims();
            if (!claims) {
                return null;
            }
            return claims['given_name'];
        },
        enumerable: true,
        configurable: true
    });
    AdvancedAuthService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [OAuthService])
    ], AdvancedAuthService);
    return AdvancedAuthService;
}());
export { AdvancedAuthService };
//# sourceMappingURL=advanced-auth.service.js.map