import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [
    // trigger('fade', [
    //   state('appear', style({
    //     opacity: 0,
    //     display: 'block'
    //   })),
    //   state('disappear', style({
    //     opacity: 0,
    //     display: 'none'
    //   })),
    //   transition('active => not-active', [
    //     animate('1s'),
    //   ]),
    //   transition('not-active => active', [
    //     animate('1s'),
    //   ])
    // ]),
  ]
})
export class BannerComponent implements OnInit {

  firstTextIsActive: boolean = false;
  secondTextIsActive: boolean = false;

  constructor() { }

  ngOnInit(): void {

    setTimeout(() => {
      this.firstTextIsActive = true;
    }, 1500);

    setInterval(() => {
      this.firstTextIsActive = !this.firstTextIsActive;
      this.secondTextIsActive = !this.secondTextIsActive;

    }, 5000)
  }
}
