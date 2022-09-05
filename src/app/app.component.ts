import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Message } from './app-model';
import { LinkOpenService } from './app-services/link-open.service';
import { LoaderService } from './app-services/loader/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './app.component.resp.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  constructor(public loader: LoaderService, private linkOpen: LinkOpenService) { }

  isSocialMediaHide: boolean = false;
  color: string = "white";
  hasHeaderToChange: boolean = false;
  hasLogoToChange: boolean = false;
  // logoImage: string = '<img src="assets/images/logo/logo-desktop.svg" alt="Odonto Clinic">';
  // logoMobileImage: string = '<img src="assets/images/logo/logo-mobile-menu-hidden.svg" alt="Odonto Clinic">';

  // mobileMenuIcon: string = '<img src="assets/images/icons/menu-icon-hamburger.svg" alt="">';

  logoImage = '<img src="assets/images/logo/logo-desktop-white-bg.svg" alt="Odonto Clinic">';
  logoMobileImage = '<img src="assets/images/logo/logo-mobile-white-bg.svg" alt="Odonto Clinic">';
  mobileMenuIcon = '<img src="assets/images/icons/menu-icon-hamburger-white-bg.svg" alt="">';

  isMenuHidden:boolean = true;

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
      // this.hasLogoToChange = true;
    }else{
      this.hasHeaderToChange = false;
      // this.hasLogoToChange = false;
    }

    // this.changeLogo();

  }

  changeLogo(){
    if(this.hasLogoToChange){
      this.logoImage = '<img src="assets/images/logo/logo-desktop-white-bg.svg" alt="Odonto Clinic">';
      this.logoMobileImage = '<img src="assets/images/logo/logo-mobile-white-bg.svg" alt="Odonto Clinic">';
      this.mobileMenuIcon = '<img src="assets/images/icons/menu-icon-hamburger-white-bg.svg" alt="">';
    }else{
      this.logoImage = '<img src="assets/images/logo/logo-desktop.svg" alt="Odonto Clinic">';
      this.logoMobileImage = '<img src="assets/images/logo/logo-mobile-menu-hidden.svg" alt="Odonto Clinic">';
      this.mobileMenuIcon = '<img src="assets/images/icons/menu-icon-hamburger.svg" alt="">';
    }
  }

  toggleSocialMediaBox(){
    this.isSocialMediaHide = !this.isSocialMediaHide;
  }

  openFacebook(){
    this.linkOpen.openFacebook();
  }

  openInstagram(){
    this.linkOpen.openInstagram();
  }

  scrollTo(element: HTMLElement){
    scrollTo(0, element.offsetTop - 90);
    
    this.menuToggle();
  }

  menuToggle(){
    this.isMenuHidden = !this.isMenuHidden;
  }
}
