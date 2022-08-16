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

  slideEndOffset: number = 164;
  slideElements: any;

  firstBoxLeftOffset: number = 0;
  secondBoxLeftOffset: number = 0;
  thirdBoxLeftOffset: number = 0;
  fourthBoxLeftOffset: number = 0;

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.slideElements = this.slideElement.nativeElement;

    this.firstBoxLeftOffset = this.firstBoxElement.nativeElement.offsetLeft;
    this.secondBoxLeftOffset = this.secondBoxElement.nativeElement.offsetLeft;
    this.thirdBoxLeftOffset = this.thirdBoxElement.nativeElement.offsetLeft;
    this.fourthBoxLeftOffset = this.fourthBoxElement.nativeElement.offsetLeft;
  }

  @HostListener('window:wheel', ['$event']) listening(){ 
    // console.log(this.slideElement.nativeElement.);
  }

  prevClick(){
    this.isNextClickable = true;
    this.isPrevClickable = false;

    this.prevWasClicked();
  }
  nextClick(){
    this.isPrevClickable = true;
    this.isNextClickable = false;

    this.nextWasClicked();
  }

  nextWasClicked(){
    this.slideElements.scrollLeft = this.fourthBoxLeftOffset - 100;
  }
  prevWasClicked(){
    this.slideElements.scrollLeft = this.firstBoxLeftOffset - 100;
  }

}
