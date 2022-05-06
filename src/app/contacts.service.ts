import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor( private httpClient:HttpClient) { }
  getContacts(){
    // const contactsList=[
    //   {contactId:1,contactName:'Maha'},
    //   {contactId:2,contactName:'Maha Pandiyan'},
    //   {contactId:3,contactName:'Mahalakshmi'}
    // ];
    // return contactsList;
//     const httpHeaders=new HttpHeaders();
// httpHeaders.append('content-type','application/json');
     
return this.httpClient.get('http://localhost:3000/User');
  }
}
