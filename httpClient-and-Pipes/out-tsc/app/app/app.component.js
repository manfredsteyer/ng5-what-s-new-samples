var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
var AppComponent = /** @class */ (function () {
    function AppComponent(router, oauthService, translate) {
        var _this = this;
        this.router = router;
        this.oauthService = oauthService;
        this.translate = translate;
        this.info = 'Welt';
        this.showWaitInfo = false;
        translate.setDefaultLang('de');
        translate.use('de');
        translate.addLangs(['en']);
        router.events.subscribe(function (event) {
            if (event instanceof NavigationStart) {
                _this.showWaitInfo = true;
            }
            if (event instanceof NavigationEnd
                || event instanceof NavigationCancel
                || event instanceof NavigationError) {
                _this.showWaitInfo = false;
            }
        });
        // The SPA's id. Register SPA with this id at the auth-server
        this.oauthService.clientId = 'spa-demo';
        // URL of the SPA to redirect the user to after login
        this.oauthService.redirectUri = window.location.origin + '/index.html';
        // The name of the auth-server that has to be mentioned within the token
        this.oauthService.issuer = 'https://steyer-identity-server.azurewebsites.net/identity';
        // set the scope for the permissions the client should request
        this.oauthService.scope = 'openid profile email voucher offline_access';
        // set to true, to receive also an id_token via OpenId Connect (OIDC) in addition to the
        // OAuth2-based access_token
        this.oauthService.oidc = true;
        // Use setStorage to use sessionStorage or another implementation of the TS-type Storage
        // instead of localStorage
        this.oauthService.setStorage(sessionStorage);
        // Verwendeter AuthService erzwingt
        // Client Secret Password Flow :-(
        this.oauthService.dummyClientSecret = 'geheim';
        this.oauthService.loadDiscoveryDocument().then(function (doc) {
            // console.debug('discovery', doc);
            // This method just tries to parse the token within the url when
            // the auth-server redirects the user back to the web-app
            // It dosn't initiate the login
            _this.oauthService.tryLogin({});
        });
    }
    AppComponent.prototype.goHome = function () {
        this.router.navigate(['/home']);
    };
    AppComponent.prototype.activateExpertMode = function () {
        var queryParams = {
            expertMode: 'true'
        };
        this.router.navigate([], { queryParams: queryParams });
    };
    AppComponent.prototype.deactivateExpertMode = function () {
        var queryParams = {
            expertMode: 'false'
        };
        this.router.navigate([], { queryParams: queryParams });
        // , fragment: '123'
    };
    AppComponent = __decorate([
        Component({
            selector: 'flight-app',
            templateUrl: './app.component.html'
        }),
        __metadata("design:paramtypes", [Router, OAuthService, TranslateService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map