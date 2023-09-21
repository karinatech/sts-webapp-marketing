import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
    selector: 'app-home-eleven',
    templateUrl: './home-eleven.component.html',
    styleUrls: ['./home-eleven.component.scss']
})
export class HomeElevenComponent implements OnInit {

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
                    type: 'triangle',
                },
            }
        };
    }

}