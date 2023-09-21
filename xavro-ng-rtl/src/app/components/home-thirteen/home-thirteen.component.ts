import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
    selector: 'app-home-thirteen',
    templateUrl: './home-thirteen.component.html',
    styleUrls: ['./home-thirteen.component.scss']
})
export class HomeThirteenComponent implements OnInit {

    constructor(private viewportScroller: ViewportScroller) {}

    public onClick(elementId: string): void { 
        this.viewportScroller.scrollToAnchor(elementId);
    }

    myStyle: object = {};
    myParams: object = {};
    width: number = 100;
    height: number = 100;
 
    ngOnInit() {
        this.myStyle = {
            'top': 0,
            'left': 0,
            'width': '100%',
            'height': '100%',
            'position': 'absolute'
        };
        this.myParams = {
            particles: {
                number: {
                    value: 80,
                },
                color: {
                    value: '#ffffff'
                },
                shape: {
                    type: 'stroke',
                },
            }
        };
    }

}