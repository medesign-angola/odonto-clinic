import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinkOpenService {

  constructor() { }

  openFacebook(){
    window.open('https://www.facebook.com/Odonto-Clinicao-105835335550321', '_blank');
  }

  openInstagram(){
    window.open('https://www.instagram.com/odonto_clinic.ao', '_blank');
  }
}
