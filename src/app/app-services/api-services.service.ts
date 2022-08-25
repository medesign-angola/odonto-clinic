import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  constructor(private http: HttpClient) { }

  protected DOMAIN_URL: string = "https://odontoclinic.ao/"; 
  protected apiMensagensUrl = this.DOMAIN_URL + "api_send_email/";

  getInstaPosts(){

    var limit = 6;
    const access_token = environment.token; // Clinic Account
    const url = `https://graph.instagram.com/me/media?access_token=${access_token}&fields=media_url,caption,permalink&limit=${limit}`;

    return this.http.get(url);

  }

  send_email(messageBody: any){
    return this.http.post<any>(this.apiMensagensUrl, messageBody);
  }

}
