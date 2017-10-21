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
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/combineLatest';
import { AuthService } from '../../shared/auth/auth.service';
var Producer = /** @class */ (function () {
    function Producer(id) {
        var _this = this;
        this.listener = [];
        this.addListener = function (fn) { return _this.listener.push(fn); };
        var count = 0;
        this.interval = setInterval(function () {
            count++;
            console.log('Producer ' + id + ': ' + count);
            _this.listener.forEach(function (fn) { return fn(count); });
        }, 1000);
    }
    return Producer;
}());
var PassengerSearchComponent = /** @class */ (function () {
    function PassengerSearchComponent(authService, http) {
        this.http = http;
        this.producer = new Producer('Hot-Observable');
        this.loading = true;
        this.name = authService['userName'];
        // Dem Observable wird ein Array mit dem Operator .from bereitgestellt
        Observable.from(['Claudia', 'Fritz', 'Peter'])
            .map(function (person) { return person.toUpperCase(); })
            .subscribe({
            // Jeder Array Wert wird nach Durchlauf der Sequenz der Callback-Funktion next übergeben
            next: function (person) {
                console.log('Person in Großbuchstaben: ' + person);
            },
            // Wenn alle Personen durchlaufen sind ist der Stream beendet und complete wird aufgerufen
            complete: function () {
                console.log('Alle Personen durchlaufen');
            }
        });
    }
    PassengerSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Teil 1
        var observer = {
            next: function (resp) { return _this.blackList = resp; },
            error: function (err) { return console.error('Observer erhält einen Fehler: ' + err); },
            complete: function () { return console.log('Abarbeitung der Flugverbotsliste ist abgeschlossen'); },
        };
        Observable.create(function (obsrv) {
            obsrv.next('Claudia');
            obsrv.next('Fritz');
            setTimeout(function () {
                obsrv.next('Peter');
                obsrv.complete();
            }, 1000);
        })
            .do(function (res) { return console.log(new Date().getSeconds(), res); })
            .map(function (resp, index) {
            return {
                id: index,
                name: resp
            };
        })
            .toArray()
            .subscribe(observer);
        // ----
        // Teil 2
        this.timeObservable = Observable.interval(1000)
            .startWith(0)
            .map(function (resp) { return new Date(); })
            .do(function (resp) { return console.log('Observable mit interval in Millisekunde: ' + resp.getMilliseconds()); })
            .share();
        this.timeSubscription = this.timeObservable.subscribe(function (resp) {
            console.log('Observer erhält ein Datum in Millisekunde: ' + resp.getMilliseconds() + '\n--');
        });
        this.hotColdTimeout = setTimeout(function () {
            // Cold Observable
            var coldObservable = Observable.create(function (obsrv) {
                var producer = new Producer('Cold-Observable');
                producer.addListener(function (value) { return obsrv.next(value); });
                return function () { return clearInterval(producer.interval); };
            });
            _this.coldSubscription = coldObservable.subscribe(function (resp) { return console.log('Zähler Cold-Observable: ' + resp); });
            // Hot Observable
            var hotObservable = Observable.create(function (obsrv) {
                _this.producer.addListener(function (value) { return obsrv.next(value); });
            });
            _this.hotSubscription = hotObservable.subscribe(function (resp) { return console.log('Zähler Hot-Observable: ' + resp); });
        }, 4000);
        // ----
        // Teil 3
        var passengersHttp = function (searchTerm) {
            return _this.http.get('/wrong/passengers.json?name=' + searchTerm)
                .catch(function (err) { return _this.http.get('/assets/passengers.json?name=' + searchTerm); })
                .delay(2000)
                .map(function (resp) {
                return resp.json().filter(function (passenger) {
                    var search = passenger.name.toLowerCase() + passenger.lastName.toLowerCase();
                    return search.indexOf(searchTerm.toLowerCase()) !== -1;
                });
            });
            // ---
        };
        passengersHttp('dan').subscribe(function (resp) { return console.log(resp); });
        this.inputSubject = new BehaviorSubject({ target: { value: this.name } });
        this.listObservable = this.inputSubject
            .asObservable()
            .debounceTime(300)
            .map(function (event) { return event.target.value; })
            .distinctUntilChanged()
            .do(function () { return _this.loading = true; })
            .switchMap(function (searchTerm) { return passengersHttp(searchTerm); })
            .do(function () { return _this.loading = false; });
        // ----
    };
    PassengerSearchComponent.prototype.ngOnDestroy = function () {
        // Teil 2
        this.timeSubscription.unsubscribe();
        clearTimeout(this.hotColdTimeout);
        if (this.hotSubscription) {
            this.hotSubscription.unsubscribe();
        }
        if (this.coldSubscription) {
            this.coldSubscription.unsubscribe();
        }
        clearInterval(this.producer.interval);
    };
    PassengerSearchComponent = __decorate([
        Component({
            templateUrl: './passenger-search.component.html'
        }),
        __metadata("design:paramtypes", [AuthService, Http])
    ], PassengerSearchComponent);
    return PassengerSearchComponent;
}());
export { PassengerSearchComponent };
//# sourceMappingURL=passenger-search.component.js.map