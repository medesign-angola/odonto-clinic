import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-specialities',
  templateUrl: './specialities.component.html',
  styleUrls: ['./specialities.component.css', './specialities.component.resp.css']
})
export class SpecialitiesComponent implements OnInit, AfterViewInit {

  @ViewChild('specSlide') slideElement !: ElementRef;
  @ViewChild('first') firstBoxElement !: ElementRef;
  @ViewChild('second') secondBoxElement !: ElementRef;
  @ViewChild('third') thirdBoxElement !: ElementRef;
  @ViewChild('fourth') fourthBoxElement !: ElementRef

  constructor() { }

  isPrevClickable: boolean = false;
  isNextClickable: boolean = true;

  slideElements: any;
  slideTotal: any; //a distancia total entre uma box e a lateral esquerda da tela.

  // Variáveis para as offsets, para fazer o scroll

  firstBoxLeftOffset: number = 0;
  secondBoxLeftOffset: number = 0;
  thirdBoxLeftOffset: number = 0;
  fourthBoxLeftOffset: number = 0;

  isOnFirstImage: boolean = true;
  isOnSecondImage: boolean = false;
  isOnThirdImage: boolean = false;
  isOnFourthImage: boolean = false;

  childSlide: number = 25;

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.slideElement.nativeElement;

    this.firstBoxLeftOffset = this.firstBoxElement.nativeElement.offsetLeft;
    this.secondBoxLeftOffset = this.secondBoxElement.nativeElement.offsetLeft;
    this.thirdBoxLeftOffset = this.thirdBoxElement.nativeElement.offsetLeft;
    this.fourthBoxLeftOffset = this.fourthBoxElement.nativeElement.offsetLeft;
  }

  @HostListener('window:wheel', ['$event'])
  @HostListener('touchmove', ['$event'])
  listening(){

    this.slideTotal = this.slideElement.nativeElement.scrollLeft + this.slideElement.nativeElement.offsetLeft;
    
    // console.log(this.slideTotal);
    // console.log(this.secondBoxLeftOffset);

    // Verificação para mobile

    if(this.slideTotal < this.secondBoxLeftOffset){

      this.isOnFirstImage = true;
      this.isOnSecondImage = false;
      this.isOnThirdImage = false;
      this.isOnFourthImage = false;

    }else if(this.slideTotal >= this.secondBoxLeftOffset && this.slideTotal < this.thirdBoxLeftOffset){
      
      this.isOnFirstImage = false;
      this.isOnSecondImage = true;
      this.isOnThirdImage = false;
      this.isOnFourthImage = false;

    }else if(this.slideTotal >= this.thirdBoxLeftOffset && this.slideTotal < this.fourthBoxLeftOffset){
      
      this.isOnFirstImage = false;
      this.isOnSecondImage = false;
      this.isOnThirdImage = true;
      this.isOnFourthImage = false;
      
    }else if(this.slideTotal + 25 >= this.fourthBoxLeftOffset){
      
      this.isOnFirstImage = false;
      this.isOnSecondImage = false;
      this.isOnThirdImage = false;
      this.isOnFourthImage = true;
    }

    // Verificação para Desktop

    if(this.slideTotal <= this.firstBoxLeftOffset){
      this.isNextClickable = true;
      this.isPrevClickable = false;

    }else if(this.slideTotal > this.firstBoxLeftOffset ){
      this.isNextClickable = false;
      this.isPrevClickable = true;

    }

    this.checkUserPosition();

  }

  prevClick(){
    if(this.isPrevClickable){
      
      this.isNextClickable = true;
      this.isPrevClickable = false;

      this.prevWasClicked();

    }else{}
  }
  nextClick(){
    if(this.isNextClickable){
      this.isPrevClickable = true;
      this.isNextClickable = false;

      this.nextWasClicked();
      
    }else{}
  }

  nextWasClicked(){
    this.slideElement.nativeElement.scrollTo(this.slideElement.nativeElement.scrollWidth, 0);
  }
  prevWasClicked(){
    this.slideElement.nativeElement.scrollTo(0, 0);
  }

  checkUserPosition(){
    if(this.isOnFirstImage){
      this.childSlide = 25;

    }else if(this.isOnSecondImage){
      this.childSlide = 50;

    }else if(this.isOnThirdImage){
      this.childSlide = 75;

    }else if(this.isOnFourthImage){
      this.childSlide = 100;

    }
  }


}
