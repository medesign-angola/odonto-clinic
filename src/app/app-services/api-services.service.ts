import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  constructor(private http: HttpClient) { }

  getInstaPosts(){

    var limit = 6;
    const access_token = environment.token; // Clinic Account
    const url = `https://graph.instagram.com/me/media?access_token=${access_token}&fields=media_url,caption,permalink&limit=${limit}`;

    return this.http.get(url);

  }

  send_email(messageBody: any){
    
    const DOMAIN_URL: string = "https://odontoclinic.ao/"; 
    const apiMensagensUrl = DOMAIN_URL + "api_send_email/";

    return this.http.post<any>(apiMensagensUrl, messageBody);
  }

}
