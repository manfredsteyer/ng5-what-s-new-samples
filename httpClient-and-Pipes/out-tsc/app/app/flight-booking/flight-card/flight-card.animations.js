import { trigger, style, transition, animate, state } from '@angular/animations';
export var ANIMATIONS = [
    // trigger, state und transition
    trigger('select', [
        state('yes', style({
            'background-color': 'orange'
        })),
        state('no', style({
            'background-color': 'lightsteelblue'
        })),
        state('*', style({
            'background-color': 'lightgrey'
        })),
        state('void', style({
            'background-color': 'white'
        })),
        transition('* => *', animate(500))
    ]),
    // Berechnete Werte
    // true und false nutzen
    // Animationsarten
    trigger('hover', []),
    // Nutzung von style in transition und animate
    // Einsatz von alias :enter und :leave mit ngIf
    trigger('button', [
        transition(':enter', [
            style({ 'opacity': 0 }),
            animate(500, style({
                'opacity': 1
            }))
        ]),
        transition(':leave', animate(500, style({
            'opacity': 0
        })))
    ]),
    // sequence
    // keyframe
    // group
    trigger('specialAnimation', [])
];
//# sourceMappingURL=flight-card.animations.js.map