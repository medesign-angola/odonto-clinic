import { Component, OnInit } from '@angular/core';
import { LinkOpenService } from '../app-services/link-open.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css', './results.component.resp.css']
})
export class ResultsComponent implements OnInit {

  constructor(private linkOpen: LinkOpenService) { }

  ngOnInit(): void {

  }
  
  openInstagram(){
    this.linkOpen.openInstagram();
  }


}
