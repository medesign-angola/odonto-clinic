import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [
    trigger('fade', [
      state('active', style({
        opacity: 1,
        display: 'block'
      })),
      state('not-active', style({
        opacity: 0,
        display: 'none'
      })),
      transition('open => close', [
        animate('1s'),
      ]),
      transition('close => open', [
        animate('1s'),
      ])
    ]),
  ]
})
export class BannerComponent implements OnInit {

  firstTextIsActive: boolean = true;
  secondTextIsActive: boolean = false;

  constructor() { }

  ngOnInit(): void {

    setInterval(() => {
      this.firstTextIsActive = false;
      this.secondTextIsActive = true;

    }, 5000)
  }
}
