import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  constructor(private http: HttpClient) { }

  getInstaPosts(){

    var limit = 6;
    const access_token = "IGQVJWU0ZAuWEktZAXUxRFhoeFNCMTlIZAmFnaG51aUZAJVk1xZA1BpdzFsektoc2JZAQ1UzMTZAhMzBsb0RwZATd5ZA1Ruanc0V2E4bnotT09UVWhxZAXBCV1AtYVk5eVoyWDhiendfWUlmQmF1REJzOXJ3S3RWNAZDZD"; // Clinic Account
    const url = `https://graph.instagram.com/me/media?access_token=${access_token}&fields=media_url,caption,permalink&limit=${limit}`;

    return this.http.get(url);

  }

  sendEmail(){}

}
