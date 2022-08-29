import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiServicesService } from '../app-services/api-services.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css', './contact-us.component.resp.css']
})
export class ContactUsComponent implements OnInit {
  
  constructor(private api: ApiServicesService) { }

  form: any;
  message: any;
  hasPanelToShow: boolean = false;

  isNameInvalid: boolean = false;
  isSubjectInvalid: boolean = false;
  isEmailInvalid: boolean = false;
  isMessageInvalid: boolean = false;

  ngOnInit(): void {

    this.form = new FormGroup({
      'nome': new FormControl('', [Validators.required]),
      'assunto': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'mensagem': new FormControl('', [Validators.required])
    });

  }

  

  send_email(){

    if(!this.form.invalid){

      // console.log(this.form);

      const formData = new FormData;
      
      formData.append('nome', this.form.get('nome').value);
      formData.append('assunto', this.form.get('assunto').value);
      formData.append('email', this.form.get('email').value);
      formData.append('mensagem', this.form.get('mensagem').value);

      // console.log(formData);

      this.api.send_email(formData).subscribe(data => {
        // console.log(data);

        this.message = {
          estado: data.estado,
          mensagem: data.mensagem
        };

        
        this.hasPanelToShow = true;

        setTimeout(() => {
          this.hasPanelToShow = false;
        }, 3000);

        this.form.reset();
      });
      // window.alert("Sem ação nenhuma, de momento.");

    }else{
      this.isNameInvalidFunction();
      this.isSubjectInvalidFunction();
      this.isEmailInvalidFunction();
      this.isMessageInvalidFunction();
    }

  }

  // appendFormData(formData = new FormData){


  //   // console.log(formData.get('nome'));
  //   return formData;
  // }

  isNameInvalidFunction(){
    if(this.form.get('nome').invalid){
      this.isNameInvalid = true;
    }else{
      this.isNameInvalid = false;
    }
  }
  isSubjectInvalidFunction(){
    if(this.form.get('assunto').invalid){
      this.isSubjectInvalid = true;
    }else{
      this.isSubjectInvalid = false;
    }
  }
  isEmailInvalidFunction(){
    if(this.form.get('email').invalid){
      this.isEmailInvalid = true;
    }else{
      this.isEmailInvalid = false;
    }
  }
  isMessageInvalidFunction(){
    if(this.form.get('mensagem').invalid){
      this.isMessageInvalid = true;
    }else{
      this.isMessageInvalid = false;
    }
  }


}
