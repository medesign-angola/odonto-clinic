import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './app.component.resp.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  constructor() { }

  isSocialMediaHide: boolean = false;
  color: string = "white";
  hasHeaderToChange: boolean = false;
  hasLogoToChange: boolean = false;
  logoImage: string = '<img src="assets/images/logo/logo-desktop.svg" alt="Odonto Clinic">';

  @ViewChild('containHeader') containHeader !: ElementRef;
  containHeaderOffset: any;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.containHeaderOffset = this.containHeader.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', ['$event']) checkTopOffset(){
    // console.log(window.pageYOffset);
    // console.log(this.containHeaderOffset);

    if(window.pageYOffset > this.containHeaderOffset){
      // console.log("passou");
      this.hasHeaderToChange = true;
      this.hasLogoToChange = true;
    }else{
      this.hasHeaderToChange = false;
      this.hasLogoToChange = false;
    }

    this.changeLogo();

  }

  changeLogo(){
    if(this.hasLogoToChange){
      this.logoImage = '<img src="assets/images/logo/logo-desktop-white-bg.svg" alt="Odonto Clinic">';
    }else{
      this.logoImage = '<img src="assets/images/logo/logo-desktop.svg" alt="Odonto Clinic">';
    }
  }

  toggleSocialMediaBox(){
    this.isSocialMediaHide = !this.isSocialMediaHide;
  }

  scrollTo(element: HTMLElement){
    scrollTo(0, element.offsetTop - 90);
  }

}
