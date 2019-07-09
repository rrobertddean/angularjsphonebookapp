import { Component, OnInit } from '@angular/core';
import { ContactService } from '../shared/contact.service';
import { Contact } from '../shared/contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styles: []
})
export class ContactListComponent implements OnInit {

  constructor(public service : ContactService) { }

  ngOnInit() {
      this.service.refreshList();
  }

  populateform(cont : Contact) {
    this.service.formData = Object.assign({}, cont);
  }

  onDelete(id : number) {
    if (confirm('Are you sure to delete this contact?')) {
      this.service.deleteContact(id).subscribe(res => {
        this.service.refreshList();
        alert("Deleted Succesfully");
      })
    }
  }

}
