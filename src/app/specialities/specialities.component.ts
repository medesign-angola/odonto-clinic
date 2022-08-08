import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-specialities',
  templateUrl: './specialities.component.html',
  styleUrls: ['./specialities.component.css']
})
export class SpecialitiesComponent implements OnInit, AfterViewInit {

  @ViewChild('slide') slideElement !: ElementRef;

  constructor() { }

  isPrevClickable: boolean = false;
  isNextClickable: boolean = true;

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    
  }

  @HostListener('window:wheel', ['$event']) listening(){ 
    console.log(window.pageXOffset);
  }

  prevClick(){
    this.isNextClickable = true; // Teste
    this.isPrevClickable = false;
  }
  nextClick(){
    this.isPrevClickable = true; // Teste
    this.isNextClickable = false;
  }

}
