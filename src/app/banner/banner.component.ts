import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [
  ]
})
export class BannerComponent implements OnInit {

  firstTextIsActive: boolean = true;

  secondTextIsActive: any = false;
  // secondTextSentence: string = '';

  thirdTextIsActive: any = false;
  // thirdTextSentence: string = '';

  constructor() { }

  ngOnInit(): void {

    setTimeout(() => {
      this.refresh();
    }, 2000);
    
  }

  refresh(){
    setInterval(() => {
      this.verification();
    }, 5000)
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
