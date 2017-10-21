import { Component, OnInit, Input, Optional } from '@angular/core';
import { TabbedPaneComponent } from './tabbed-pane.component';

@Component({
    selector: 'flight-tab',
    template: `
        <div *ngIf="visible">
            <h2>{{title}}</h2>
            <ng-content></ng-content>
        </div>
    `
})
export class TabComponent implements OnInit {
    public visible: boolean = false;
    @Input() public title: string;

    constructor(@Optional() public tabs: TabbedPaneComponent) {
    }

    ngOnInit() {
        if (this.tabs) {
            this.tabs.register(this);
        }
    }
}
