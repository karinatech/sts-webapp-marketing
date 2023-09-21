import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-home-eight',
  templateUrl: './home-eight.component.html',
  styleUrls: ['./home-eight.component.scss']
})
export class HomeEightComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller) {}

  public onClick(elementId: string): void { 
      this.viewportScroller.scrollToAnchor(elementId);
  }

  ngOnInit() {
  }

}
