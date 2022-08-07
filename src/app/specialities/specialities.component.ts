import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-specialities',
  templateUrl: './specialities.component.html',
  styleUrls: ['./specialities.component.css']
})
export class SpecialitiesComponent implements OnInit {

  constructor() { }

  isPrevClickable: boolean = false;
  isNextClickable: boolean = true;

  ngOnInit(): void {

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
