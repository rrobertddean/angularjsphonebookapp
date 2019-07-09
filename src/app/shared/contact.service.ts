import { Injectable } from '@angular/core';
import { Contact } from './contact.model';
import { HttpClient, HttpHeaders } from "@angular/common/http"

const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class ContactService {

  formData: Contact;
  list: Contact[];

  readonly rootUrl = "http://localhost:1326/api"

  constructor(private http : HttpClient) { }

  postContact(formData : Contact) {
    console.log(formData);
    return this.http.post(this.rootUrl+'/Contact',formData);
    
  }

  putContact(formData : Contact) {
      console.log(formData);
      return this.http.put(this.rootUrl+'/Contact/'+formData.id,formData)

  }

  deleteContact(id: number) {
    console.log(id);
    return this.http.delete(this.rootUrl+'/Contact/'+id);
  }

  refreshList() {
      this.http.get(this.rootUrl+'/Contact').toPromise().then(res => this.list = res as Contact[]);
  }





}
