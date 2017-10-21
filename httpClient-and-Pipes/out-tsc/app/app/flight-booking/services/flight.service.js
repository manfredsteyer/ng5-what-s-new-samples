var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { BASE_URL } from '../../app.tokens';
import { OAuthService } from 'angular-oauth2-oidc';
var FlightService = /** @class */ (function () {
    function FlightService(oauthService, http, baseUrl) {
        this.oauthService = oauthService;
        this.http = http;
        this.baseUrl = baseUrl;
        this.flights = [];
    }
    FlightService.prototype.findById = function (id) {
        var url = this.baseUrl + '/api/flight';
        // let url = this.baseUrl + '/api/secureflight';
        // let url = '/data/flights.json';
        var headers = new HttpHeaders()
            .set('Accept', 'text/json');
        var params = new HttpParams()
            .set('id', id);
        return this.http.get(url, { headers: headers, params: params });
    };
    FlightService.prototype.find = function (from, to) {
        var _this = this;
        // const url = this.baseUrl + '/api/flight';
        var url = this.baseUrl + '/api/secureflight';
        // let url = '/data/flights.json';
        var headers = new HttpHeaders()
            .set('Accept', 'application/json');
        // this.oauthService.hasValidAccessToken();
        // this.oauthService.hasValidIdToken();
        var params = new HttpParams()
            .set('from', from)
            .set('to', to);
        var responseType = 'json';
        var reportProgress = false;
        var observe = 'body';
        this
            .http
            .get(url, { headers: headers, params: params, responseType: responseType, reportProgress: reportProgress, observe: observe })
            .subscribe(function (flights) {
            _this.flights = flights;
        }, function (err) {
            console.warn(err);
        });
    };
    FlightService = __decorate([
        Injectable(),
        __param(2, Inject(BASE_URL)),
        __metadata("design:paramtypes", [OAuthService,
            HttpClient, String])
    ], FlightService);
    return FlightService;
}());
export { FlightService };
//# sourceMappingURL=flight.service.js.map