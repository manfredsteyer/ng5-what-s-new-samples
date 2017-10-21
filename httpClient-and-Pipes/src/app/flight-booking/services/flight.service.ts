import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { BASE_URL } from '../../app.tokens';
import { Observable } from 'rxjs/Observable';
import { Flight } from '../../entities/flight';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable()
export class FlightService {

    public flights: Array<Flight> = [];

    constructor(private oauthService: OAuthService,
                private http: HttpClient,
                @Inject(BASE_URL) private baseUrl: string) {
    }

    findById(id: string): Observable<Flight> {

        const url = this.baseUrl + '/api/flight';
        // let url = this.baseUrl + '/api/secureflight';
        // let url = '/data/flights.json';

        const headers = new HttpHeaders()
                                .set('Accept', 'text/json');

        const params = new HttpParams()
                                 .set('id', id);

        return this.http.get<Flight>(url, {headers, params});

    }

    find(from: string, to: string): void {

        // const url = this.baseUrl + '/api/flight';
        const url = this.baseUrl + '/api/secureflight';
        // let url = '/data/flights.json';

        const headers = new HttpHeaders()
                                .set('Accept-Language', 'de-DE');
                                // .set('Accept', 'application/json');

        // this.oauthService.hasValidAccessToken();
        // this.oauthService.hasValidIdToken();

        const params = new HttpParams()
                                .set('from', from)
                                .set('to', to);


        const responseType = 'json';
        const reportProgress = false;
        const observe = 'body';
                                
        this
            .http
            .get<Flight[]>(url, {headers, params, responseType, reportProgress, observe})
            .subscribe(
                (flights) => {
                    this.flights = flights;
                },
                (err) => {
                    console.warn(err);
                }
            );
    }
}
