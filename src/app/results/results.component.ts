import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor() { }

  showAllResults: boolean = true;

  ngOnInit(): void {

  }

  toggleVisibility(){
    // this.showAllResults = !this.showAllResults;
  }

}
