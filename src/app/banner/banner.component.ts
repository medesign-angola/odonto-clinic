import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  
  firstImageTime: string = "";
  secondImageTime: string = "";
  thirdImageTime: string = "";
  fourthImageTime: string = "";
  fifthImageTime: string = "";
  sixthImageTime: string = "";

  constructor() { }

  ngOnInit(): void {
    
    this.firstImageTime = "present";
    this.secondImageTime = "future";
    this.thirdImageTime = "past-four";
    this.fourthImageTime = "past-three";
    this.fifthImageTime = "past-two";
    this.sixthImageTime = "past-one";

    let slideInterval = setInterval(() => {
      this.slideChange();

    }, 4000);

  }

  slideChange(): void{

    this.checkFirstImageTimer();
    this.checkSecondImageTimer();
    this.checkThirdImageTimer();
    this.checkFourthImageTimer();
    this.checkFifthImageTimer();
    this.checkSixthImageTimer();

  }

  checkFirstImageTimer(){
    if(this.firstImageTime === "present"){
      this.firstImageTime = "past-one";

    }else if(this.firstImageTime === "past-one"){
      this.firstImageTime = "past-two";

    }else if(this.firstImageTime === "past-two"){
      this.firstImageTime = "past-three";

    }else if(this.firstImageTime === "past-three"){
      this.firstImageTime = "past-four";

    }else if(this.firstImageTime === "past-four"){
      this.firstImageTime = "future";

    }else if(this.firstImageTime === "future"){
      this.firstImageTime = "present";
    }
  }

  checkSecondImageTimer(){
    if(this.secondImageTime === "present"){
      this.secondImageTime = "past-one";

    }else if(this.secondImageTime === "past-one"){
      this.secondImageTime = "past-two";

    }else if(this.secondImageTime === "past-two"){
      this.secondImageTime = "past-three";

    }else if(this.secondImageTime === "past-three"){
      this.secondImageTime = "past-four";

    }else if(this.secondImageTime === "past-four"){
      this.secondImageTime = "future";

    }else if(this.secondImageTime === "future"){
      this.secondImageTime = "present";
    }
  }

  checkThirdImageTimer(){
    if(this.thirdImageTime === "present"){
      this.thirdImageTime = "past-one";

    }else if(this.thirdImageTime === "past-one"){
      this.thirdImageTime = "past-two";

    }else if(this.thirdImageTime === "past-two"){
      this.thirdImageTime = "past-three";

    }else if(this.thirdImageTime === "past-three"){
      this.thirdImageTime = "past-four";

    }else if(this.thirdImageTime === "past-four"){
      this.thirdImageTime = "future";

    }else if(this.thirdImageTime === "future"){
      this.thirdImageTime = "present";
    }
  }

  checkFourthImageTimer(){
    if(this.fourthImageTime === "present"){
      this.fourthImageTime = "past-one";

    }else if(this.fourthImageTime === "past-one"){
      this.fourthImageTime = "past-two";

    }else if(this.fourthImageTime === "past-two"){
      this.fourthImageTime = "past-three";

    }else if(this.fourthImageTime === "past-three"){
      this.fourthImageTime = "past-four";

    }else if(this.fourthImageTime === "past-four"){
      this.fourthImageTime = "future";

    }else if(this.fourthImageTime === "future"){
      this.fourthImageTime = "present";
    }
  }

  checkFifthImageTimer(){
    if(this.fifthImageTime === "present"){
      this.fifthImageTime = "past-one";

    }else if(this.fifthImageTime === "past-one"){
      this.fifthImageTime = "past-two";

    }else if(this.fifthImageTime === "past-two"){
      this.fifthImageTime = "past-three";

    }else if(this.fifthImageTime === "past-three"){
      this.fifthImageTime = "past-four";

    }else if(this.fifthImageTime === "past-four"){
      this.fifthImageTime = "future";

    }else if(this.fifthImageTime === "future"){
      this.fifthImageTime = "present";
    }
  }

  checkSixthImageTimer(){
    if(this.sixthImageTime === "present"){
      this.sixthImageTime = "past-one";

    }else if(this.sixthImageTime === "past-one"){
      this.sixthImageTime = "past-two";

    }else if(this.sixthImageTime === "past-two"){
      this.sixthImageTime = "past-three";

    }else if(this.sixthImageTime === "past-three"){
      this.sixthImageTime = "past-four";

    }else if(this.sixthImageTime === "past-four"){
      this.sixthImageTime = "future";

    }else if(this.sixthImageTime === "future"){
      this.sixthImageTime = "present";
    }
  }

}
