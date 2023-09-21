import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-home-four',
  templateUrl: './home-four.component.html',
  styleUrls: ['./home-four.component.scss']
})
export class HomeFourComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller) {}

  public onClick(elementId: string): void { 
      this.viewportScroller.scrollToAnchor(elementId);
  }

  ngOnInit() {
  }

}
