import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
    selector: 'app-work',
    templateUrl: './work.component.html',
    styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

    constructor(private viewportScroller: ViewportScroller) {}

    public onClick(elementId: string): void { 
        this.viewportScroller.scrollToAnchor(elementId);
    }

    ngOnInit() {}

    // for tab click event
    currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }

}