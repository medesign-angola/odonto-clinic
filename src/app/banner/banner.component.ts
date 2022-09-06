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

  firstTextIsActive: boolean = true;

  secondTextIsActive: any = 'off';
  secondTextSentence: string = '';

  thirdTextIsActive: any = 'off';
  thirdTextSentence: string = '';

  constructor() { }

  ngOnInit(): void {
    
    this.secondTextIsActive = false;
    this.thirdTextIsActive = false;

    setTimeout(() => {

      this.secondTextSentence = 'O sorriso é o seu, o cuidado é nosso.'
      this.thirdTextSentence = 'Estou testando um texto aleatório aqui.';


      this.refresh();
    }, 1500);
    
  }

  refresh(){
    setInterval(() => {
      this.verification();
    }, 3000)
  }

  verification(){
    if(this.firstTextIsActive){
      this.firstTextIsActive = false;
      this.secondTextIsActive = true;
      this.thirdTextIsActive = false;
    
    }else if(this.secondTextIsActive){
      this.firstTextIsActive = false;
      this.secondTextIsActive = false;
      this.thirdTextIsActive = true;
      
    }else if(this.thirdTextIsActive){
      
      this.firstTextIsActive = true;
      this.secondTextIsActive = false;
      this.thirdTextIsActive = false;

    }
  }
}
