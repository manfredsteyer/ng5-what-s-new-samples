var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BASE_URL } from './app.tokens';
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app.routes';
import { HomeComponent } from './home/home.component';
import { FlightHistoryComponent } from './flight-history/flight-history.component';
import { BookingsComponent } from './bookings/bookings.component';
import { InvoicesModule } from './invoices/invoices.module';
import { BookingDetailsComponent } from './bookings/booking-details.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';
import { OAuthModule } from 'angular-oauth2-oidc';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
var IntegrationLoader = /** @class */ (function () {
    function IntegrationLoader() {
    }
    IntegrationLoader.prototype.getTranslation = function (langId) {
        var langs = {};
        langs['de'] = require('../locale/de.json');
        langs['en'] = require('../locale/en.json');
        return Observable.of(langs[langId]);
    };
    return IntegrationLoader;
}());
export { IntegrationLoader };
export function createTranslateLoader(http) {
    return new TranslateHttpLoader(http, './locale/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            imports: [
                BrowserModule,
                BrowserAnimationsModule,
                HttpModule,
                HttpClientModule,
                FormsModule,
                ReactiveFormsModule,
                SharedModule.forRoot(),
                AppRouterModule,
                InvoicesModule,
                OAuthModule.forRoot(),
                TranslateModule.forRoot({
                    loader: {
                        provide: TranslateLoader,
                        useClass: IntegrationLoader
                    }
                })
                // TranslateModule.forRoot({
                //     loader: {
                //         provide: TranslateLoader,
                //         useFactory: (createTranslateLoader),
                //         deps: [Http]
                //     }
                // })
                // FlightBookingModule // <-- Würde Lazy Loading verhindern
            ],
            declarations: [
                AppComponent,
                HomeComponent,
                BookingsComponent,
                BookingDetailsComponent,
                FlightHistoryComponent
            ],
            providers: [
                { provide: BASE_URL, useValue: 'http://www.angular.at' }
            ],
            bootstrap: [
                AppComponent
            ]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map