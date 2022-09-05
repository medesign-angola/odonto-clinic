import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  firstSentence: string = '<p class="text-white text-[65px] font-bold text-left indent-[100px] animate-[fade]">O sorriso é o seu cartão de visitas.</p>';
  secondSentence: string = '<p class="text-white text-[65px] font-bold text-left indent-[100px]">O sorriso é o seu, o cuidado é nosso.</p>';
  thirdSentence: string = '<p class="text-white text-[65px] font-bold text-left indent-[100px]">Estou testando mais frases aqui</p>';
  fourthSentence: string = '<p class="text-white text-[65px] font-bold text-left indent-[100px]">Ainda estou testando mais frases aqui</p>';
  fifthSentence: string = '<p class="text-white text-[65px] font-bold text-left indent-[100px]">Continuo a fazer o teste de mais frases</p>';

  presentSentence: string = '';


  constructor() { }

  ngOnInit(): void {
    this.presentSentence = this.firstSentence;

    setTimeout(() => {
      this.refresh();
    }, 5000)
  }

  refresh(){
    this.presentSentence = this.secondSentence;
  }

}
