import { Component, OnInit } from '@angular/core';
import { Flight } from '../../entities/flight';
import { FlightService } from '../services/flight.service';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
    selector: 'flight-search-reactive',
    templateUrl: 'flight-search-reactive.component.html',
    providers: [FlightService],
    styleUrls: ['flight-search-reactive.component.css']
})
export class FlightSearchReactiveComponent implements OnInit {

    public selectedFlight: Flight;
    public filter: FormGroup;

    constructor(private flightService: FlightService,
                private fb: FormBuilder) {
    }
    
    ngOnInit() {

        this.filter = this.fb.group({
            'from': ['Graz'],
            'to': ['Hamburg']
        });

        this
            .filter
            .valueChanges
            .debounceTime(300)
            .map(values => values.from == values.to)
            .map(same => (same) ? { roundTrip: true } : {} )
            .subscribe(errors => {
                this.filter.setErrors(errors);
            });

    }


    public get flights(): Array<Flight> {
        return this.flightService.flights;
    }

    public select(f: Flight): void {
        this.selectedFlight = f;
    }

    public search(): void {
        const value = this.filter.value;

        this.flightService
            .find(value.from, value.to);
    }

   
}
