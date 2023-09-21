import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-home-six',
  templateUrl: './home-six.component.html',
  styleUrls: ['./home-six.component.scss']
})
export class HomeSixComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller) {}

  public onClick(elementId: string): void { 
      this.viewportScroller.scrollToAnchor(elementId);
  }

  ngOnInit() {
  }

}
