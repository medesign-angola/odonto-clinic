import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-specialities',
  templateUrl: './specialities.component.html',
  styleUrls: ['./specialities.component.css', './specialities.component.resp.css']
})
export class SpecialitiesComponent implements OnInit, AfterViewInit {

  @ViewChild('specSlide') slideElement !: ElementRef;
  @ViewChild('first') firstBoxElement !: ElementRef;
  @ViewChild('second') secondBoxElement !: ElementRef;
  @ViewChild('third') thirdBoxElement !: ElementRef;
  @ViewChild('fourth') fourthBoxElement !: ElementRef
  @ViewChild('fifth') fifthBoxElement !: ElementRef
  @ViewChild('sixth') sixthBoxElement !: ElementRef
  @ViewChild('seventh') seventhBoxElement !: ElementRef
  @ViewChild('eigth') eigthBoxElement !: ElementRef
  @ViewChild('nineth') ninethBoxElement !: ElementRef
  @ViewChild('tenth') tenthBoxElement !: ElementRef

  constructor() { }

  isPrevClickable: boolean = false;
  isNextClickable: boolean = true;

  slideTotal: any; //a distancia total entre uma box e a lateral esquerda da tela.

  // Variáveis para as offsets, para fazer o scroll

  firstBoxLeftOffset: number = 0;
  secondBoxLeftOffset: number = 0;
  thirdBoxLeftOffset: number = 0;
  fourthBoxLeftOffset: number = 0;
  fifthBoxLeftOffset: number = 0;
  sixthBoxLeftOffset: number = 0;
  seventhBoxLeftOffset: number = 0;
  eigthBoxLeftOffset: number = 0;
  ninethBoxLeftOffset: number = 0;
  tenthBoxLeftOffset: number = 0;

  isOnFirstImage: boolean = true;
  isOnSecondImage: boolean = false;
  isOnThirdImage: boolean = false;
  isOnFourthImage: boolean = false;
  isOnFifthImage: boolean = false;
  isOnSixthImage: boolean = false;
  isOnSeventhImage: boolean = false;
  isOnEigthImage: boolean = false;
  isOnNinethImage: boolean = false;
  isOnTenthImage: boolean = false;
  

  childSlide: string = 0 + '%';

  ngOnInit(): void {

    this.childSlide = 10 + '%';
  }

  ngAfterViewInit(): void {
    this.slideElement.nativeElement;

    this.firstBoxLeftOffset = this.firstBoxElement.nativeElement.offsetLeft;
    this.secondBoxLeftOffset = this.secondBoxElement.nativeElement.offsetLeft;
    this.thirdBoxLeftOffset = this.thirdBoxElement.nativeElement.offsetLeft;
    this.fourthBoxLeftOffset = this.fourthBoxElement.nativeElement.offsetLeft;
    this.fifthBoxLeftOffset = this.fifthBoxElement.nativeElement.offsetLeft;
    this.sixthBoxLeftOffset = this.sixthBoxElement.nativeElement.offsetLeft;
    this.seventhBoxLeftOffset = this.seventhBoxElement.nativeElement.offsetLeft;
    this.eigthBoxLeftOffset = this.eigthBoxElement.nativeElement.offsetLeft;
    this.ninethBoxLeftOffset = this.ninethBoxElement.nativeElement.offsetLeft;
    this.tenthBoxLeftOffset = this.tenthBoxElement.nativeElement.offsetLeft;
    
  }


  prevClick(){
    if(this.isPrevClickable){
      
      this.isNextClickable = true;
      this.isPrevClickable = false;

      this.prevWasClicked();

    }else{}
  }
  nextClick(){
    if(this.isNextClickable){
      this.isPrevClickable = true;
      this.isNextClickable = false;

      this.nextWasClicked();
      
    }else{}
  }

  nextWasClicked(){
    this.slideElement.nativeElement.scrollTo(this.slideElement.nativeElement.scrollWidth, 0);
  }
  prevWasClicked(){
    this.slideElement.nativeElement.scrollTo(0, 0);
  }


  
  checkWhoIsActive(){
    let interval = setInterval(() => {
      this.conditionsOnScroll();
    }, 400)

    setTimeout(() => {
      clearInterval(interval);
    }, 800)

    // this.checkUserPosition();
  }

  // Capturar evento do toque na tela (telefone)
  @HostListener('touchmove', ['$event']) touch(){
    this.checkWhoIsActive();
  }

  // Capturar evento do scroll em um computador
  @HostListener('window:wheel', ['$event'])
  listening(){
    // Validação da posição actual da lateral esquerda da tela para mobile

    
    // console.log(this.slideTotal);
    // console.log(this.seventhBoxLeftOffset);

    this.conditionsOnScroll();

    // Validação da posição actual da lateral esquerda da tela para Desktop

    if(this.slideTotal <= this.firstBoxLeftOffset){
      this.isNextClickable = true;
      this.isPrevClickable = false;

    }else if(this.slideTotal > this.firstBoxLeftOffset && this.slideTotal <= this.seventhBoxLeftOffset){
      this.isNextClickable = true;
      this.isPrevClickable = true;

    }else if(this.slideTotal > this.seventhBoxLeftOffset){
        this.isNextClickable = false;
        this.isPrevClickable = true;
    }
    // }else if(this.slideTotal > this.slideElement.nativeElement.scrollWidth ){
    //   this.isNextClickable = false;
    //   this.isPrevClickable = true;

    // }

    // this.checkUserPosition();

  }

  conditionsOnScroll(){

    this.slideTotal = this.slideElement.nativeElement.scrollLeft + this.slideElement.nativeElement.offsetLeft;
    
    // console.log(this.slideTotal);
    // console.log(this.secondBoxLeftOffset);

    if(this.slideTotal < this.secondBoxLeftOffset){

      this.isOnFirstImage = true;
      this.isOnSecondImage = false;
      this.isOnThirdImage = false;
      this.isOnFourthImage = false;
      this.isOnFifthImage = false;
      this.isOnSixthImage = false;
      this.isOnSeventhImage = false;
      this.isOnEigthImage = false;
      this.isOnNinethImage = false;
      this.isOnTenthImage = false;

      // Para cada verificação da posição do ecrã, função para actualizar a percentagem do custom scroll
      this.checkUserPosition();

    }else if(this.slideTotal >= this.secondBoxLeftOffset && this.slideTotal < this.thirdBoxLeftOffset){
      
      this.isOnFirstImage = false;
      this.isOnSecondImage = true;
      this.isOnThirdImage = false;
      this.isOnFourthImage = false;
      this.isOnFifthImage = false;
      this.isOnSixthImage = false;
      this.isOnSeventhImage = false;
      this.isOnEigthImage = false;
      this.isOnNinethImage = false;
      this.isOnTenthImage = false;

      // Para cada verificação da posição do ecrã, função para actualizar a percentagem do custom scroll
      this.checkUserPosition();

    }else if(this.slideTotal >= this.thirdBoxLeftOffset && this.slideTotal < this.fourthBoxLeftOffset){
      
      this.isOnFirstImage = false;
      this.isOnSecondImage = false;
      this.isOnThirdImage = true;
      this.isOnFourthImage = false;
      this.isOnFifthImage = false;
      this.isOnSixthImage = false;
      this.isOnSeventhImage = false;
      this.isOnEigthImage = false;
      this.isOnNinethImage = false;
      this.isOnTenthImage = false;

      // console.log(this.slideTotal + 2);
      // console.log(this.fourthBoxLeftOffset);

      // return;

      // Para cada verificação da posição do ecrã, função para actualizar a percentagem do custom scroll
      this.checkUserPosition();
      
    }else if(this.slideTotal >= this.fourthBoxLeftOffset && this.slideTotal < this.fifthBoxLeftOffset){
      
      this.isOnFirstImage = false;
      this.isOnSecondImage = false;
      this.isOnThirdImage = false;
      this.isOnFourthImage = true;
      this.isOnFifthImage = false;
      this.isOnSixthImage = false;
      this.isOnSeventhImage = false;
      this.isOnEigthImage = false;
      this.isOnNinethImage = false;
      this.isOnTenthImage = false;

      // console.log(this.slideTotal + 2);
      // console.log(this.fourthBoxLeftOffset);

      // return;

      // Para cada verificação da posição do ecrã, função para actualizar a percentagem do custom scroll
      this.checkUserPosition();
      
    }else if(this.slideTotal >= this.fifthBoxLeftOffset && this.slideTotal < this.sixthBoxLeftOffset){
      
      this.isOnFirstImage = false;
      this.isOnSecondImage = false;
      this.isOnThirdImage = false;
      this.isOnFourthImage = false;
      this.isOnFifthImage = true;
      this.isOnSixthImage = false;
      this.isOnSeventhImage = false;
      this.isOnEigthImage = false;
      this.isOnNinethImage = false;
      this.isOnTenthImage = false;

      // console.log(this.slideTotal + 2);
      // console.log(this.fourthBoxLeftOffset);

      // return;

      // Para cada verificação da posição do ecrã, função para actualizar a percentagem do custom scroll
      this.checkUserPosition();
      
    }else if(this.slideTotal >= this.sixthBoxLeftOffset && this.slideTotal < this.seventhBoxLeftOffset){
      
      this.isOnFirstImage = false;
      this.isOnSecondImage = false;
      this.isOnThirdImage = false;
      this.isOnFourthImage = false;
      this.isOnFifthImage = false;
      this.isOnSixthImage = true;
      this.isOnSeventhImage = false;
      this.isOnEigthImage = false;
      this.isOnNinethImage = false;
      this.isOnTenthImage = false;

      // console.log(this.slideTotal + 2);
      // console.log(this.fourthBoxLeftOffset);

      // return;

      // Para cada verificação da posição do ecrã, função para actualizar a percentagem do custom scroll
      this.checkUserPosition();
      
    }else if(this.slideTotal >= this.seventhBoxLeftOffset && this.slideTotal < this.eigthBoxLeftOffset){
      
      this.isOnFirstImage = false;
      this.isOnSecondImage = false;
      this.isOnThirdImage = false;
      this.isOnFourthImage = false;
      this.isOnFifthImage = false;
      this.isOnSixthImage = false;
      this.isOnSeventhImage = true;
      this.isOnEigthImage = false;
      this.isOnNinethImage = false;
      this.isOnTenthImage = false;

      // console.log(this.slideTotal + 2);
      // console.log(this.fourthBoxLeftOffset);

      // return;

      // Para cada verificação da posição do ecrã, função para actualizar a percentagem do custom scroll
      this.checkUserPosition();
      
    }else if(this.slideTotal >= this.eigthBoxLeftOffset && this.slideTotal < this.ninethBoxLeftOffset){
      
      this.isOnFirstImage = false;
      this.isOnSecondImage = false;
      this.isOnThirdImage = false;
      this.isOnFourthImage = false;
      this.isOnFifthImage = false;
      this.isOnSixthImage = false;
      this.isOnSeventhImage = false;
      this.isOnEigthImage = true;
      this.isOnNinethImage = false;
      this.isOnTenthImage = false;

      // console.log(this.slideTotal + 2);
      // console.log(this.fourthBoxLeftOffset);

      // return;

      // Para cada verificação da posição do ecrã, função para actualizar a percentagem do custom scroll
      this.checkUserPosition();
      
    }else if(this.slideTotal >= this.ninethBoxLeftOffset && this.slideTotal < this.tenthBoxLeftOffset){
      
      this.isOnFirstImage = false;
      this.isOnSecondImage = false;
      this.isOnThirdImage = false;
      this.isOnFourthImage = false;
      this.isOnFifthImage = false;
      this.isOnSixthImage = false;
      this.isOnSeventhImage = false;
      this.isOnEigthImage = false;
      this.isOnNinethImage = true;
      this.isOnTenthImage = false;

      // console.log(this.slideTotal + 2);
      // console.log(this.fourthBoxLeftOffset);

      // return;

      // Para cada verificação da posição do ecrã, função para actualizar a percentagem do custom scroll
      this.checkUserPosition();
      
    }else if(this.slideTotal >= this.thirdBoxLeftOffset && this.slideTotal < this.fourthBoxLeftOffset){
      
      this.isOnFirstImage = false;
      this.isOnSecondImage = false;
      this.isOnThirdImage = false;
      this.isOnFourthImage = false;
      this.isOnFifthImage = false;
      this.isOnSixthImage = false;
      this.isOnSeventhImage = false;
      this.isOnEigthImage = false;
      this.isOnNinethImage = false;
      this.isOnTenthImage = true;

      // console.log(this.slideTotal + 2);
      // console.log(this.fourthBoxLeftOffset);

      // return;

      // Para cada verificação da posição do ecrã, função para actualizar a percentagem do custom scroll
      this.checkUserPosition();
      
    }else if(this.slideTotal >= this.tenthBoxLeftOffset){
      
      this.isOnFirstImage = false;
      this.isOnSecondImage = false;
      this.isOnThirdImage = false;
      this.isOnFourthImage = false;
      this.isOnFifthImage = false;
      this.isOnSixthImage = false;
      this.isOnSeventhImage = false;
      this.isOnEigthImage = false;
      this.isOnNinethImage = false;
      this.isOnTenthImage = true;

      // console.log(this.slideTotal + 2);
      // console.log(this.fourthBoxLeftOffset);

      // return;

      // Para cada verificação da posição do ecrã, função para actualizar a percentagem do custom scroll
      this.checkUserPosition();
      
    }else{
      return;
    }
  }

  checkUserPosition(){
    if(this.isOnFirstImage){
      this.childSlide = 10 + '%';
      // console.log("primeira imagem está activa");

    }else if(this.isOnSecondImage){
      this.childSlide = 20 + '%';
      // console.log("segunda imagem está activa");

    }else if(this.isOnThirdImage){
      this.childSlide = 30 + '%';
      // console.log("terceira imagem está activa");

    }else if(this.isOnFourthImage){
      this.childSlide = 40 + '%';
      // console.log("quarta imagem está activa");

    }else if(this.isOnFifthImage){
      this.childSlide = 50 + '%';
      // console.log("quarta imagem está activa");

    }else if(this.isOnSixthImage){
      this.childSlide = 60 + '%';
      // console.log("quarta imagem está activa");

    }else if(this.isOnSeventhImage){
      this.childSlide = 70 + '%';
      // console.log("quarta imagem está activa");

    }else if(this.isOnEigthImage){
      this.childSlide = 80 + '%';
      // console.log("quarta imagem está activa");

    }else if(this.isOnNinethImage){
      this.childSlide = 90 + '%';
      // console.log("quarta imagem está activa");

    }else if(this.isOnTenthImage){
      this.childSlide = 100 + '%';
      // console.log("quarta imagem está activa");

    }
  }


}
