import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css', './about-us.component.resp.css']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  @Output() specialityButtonWasClicked = new EventEmitter<boolean>();

  ngOnInit(): void {
  }

  specialitiesButtonClick(){
    this.specialityButtonWasClicked.emit(true);
    // window.alert()
  }

}
