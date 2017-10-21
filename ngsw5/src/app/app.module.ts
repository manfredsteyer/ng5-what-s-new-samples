import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FlightSearchComponent } from './flight-booking/flight-search/flight-search.component';
import { FlightService } from './flight-booking/flight-search/flight.service';
import { BASE_URL } from './app.tokens';
import { CityPipe } from './shared/city.pipe';
import { FlightBookingModule } from './flight-booking/flight-booking.module';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { AppRouterModule } from './app.routes';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FlightBookingModule,
    AppRouterModule,
    ServiceWorkerModule.register('/ngsw-worker.js')
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent
  ],
  providers: [
    { provide: BASE_URL, useValue: 'http://www.angular.at/api' }
    //{ provide: FlightService, useClass: FlightService }
    // FlightService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
