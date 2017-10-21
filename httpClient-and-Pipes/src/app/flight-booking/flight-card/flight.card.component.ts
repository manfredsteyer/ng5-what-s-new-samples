import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AnimationEvent } from '@angular/animations';

import { Flight } from '../../entities/flight';
import { ANIMATIONS } from './flight-card.animations';

@Component({
    selector: 'flight-card',
    templateUrl: './flight-card.component.html',
    preserveWhitespaces: false,
    animations: ANIMATIONS
})
export class FlightCardComponent {

    @Input() item: Flight;
    @Input() selectedItem: Flight;
    @Output() selectedItemChange = new EventEmitter<Flight>();

    @Output() specialAnimationStatus = new EventEmitter<AnimationEvent>();
    hoverState = false;

    ngOnInit() {
        this.item.date = new Date(2018,0,20,21,0).toISOString();
    }

    isSelected() {
        if (this.selectedItem) {
            return this.selectedItem === this.item ? 'yes' : 'no';
        }
    }

    toggleHover() {
        this.hoverState = !this.hoverState;
    }

    setStatus(event) {
        this.specialAnimationStatus.emit(event);
    }

    select() {
        this.selectedItemChange.emit(this.item);
    }
}
