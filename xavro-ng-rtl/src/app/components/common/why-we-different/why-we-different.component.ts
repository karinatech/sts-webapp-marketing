import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-why-we-different',
  templateUrl: './why-we-different.component.html',
  styleUrls: ['./why-we-different.component.scss']
})
export class WhyWeDifferentComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller) {}

  public onClick(elementId: string): void { 
      this.viewportScroller.scrollToAnchor(elementId);
  }

  ngOnInit() {
  }

}
