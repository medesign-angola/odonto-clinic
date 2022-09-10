import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contact-panel',
  templateUrl: './contact-panel.component.html',
  styleUrls: ['./contact-panel.component.css']
})
export class ContactPanelComponent implements OnInit {

  constructor() { }

  @Output() specButtonClicked = new EventEmitter<boolean>();

  ngOnInit(): void {
  }

  callMe(){
    window.open('tel:+244927963432');
  }

  takeMeToSpecialities(){
    this.specButtonClicked.emit(true);
  }

}
