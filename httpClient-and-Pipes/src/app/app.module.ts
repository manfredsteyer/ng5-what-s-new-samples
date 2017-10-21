import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Http, HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
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

import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import localeDeExtra from '@angular/common/locales/extra/de';
import localeDeAt from '@angular/common/locales/de-AT';
import localeEs from '@angular/common/locales/es';

registerLocaleData(localeDe, localeDeExtra);
registerLocaleData(localeDeAt);
registerLocaleData(localeEs);



export class IntegrationLoader implements TranslateLoader {
    getTranslation(langId: string): Observable<any> {
        const langs = {};
        langs['de'] = require('../locale/de.json');
        langs['en'] = require('../locale/en.json');
        return Observable.of(langs[langId]);
    }
}

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './locale/', '.json');
}

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpModule, // Alt
        HttpClientModule, // Neu
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
        {provide: BASE_URL, useValue: 'http://www.angular.at'},
        { provide: LOCALE_ID, useValue: 'de' },
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
