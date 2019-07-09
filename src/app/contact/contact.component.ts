import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from '../shared/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: []
})
export class ContactComponent implements OnInit {

  constructor(public service : ContactService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
        form.resetForm();
    }

    this.service.formData = {
      id:null,
      firstname: '',
      lastname: '',
      contactnumber: '',
      address: ''
    }

  }

  onSubmit(form: NgForm) {
    if (form.value.id == null) {
      this.insertRecord(form);
    }else {
      this.updateRecord(form);
    }
  }

  insertRecord(form: NgForm) {

    this.service.postContact(form.value).subscribe(res => {
        alert("Inserted Succesfully");
        this.resetForm(form);
        this.service.refreshList();
    })
    
  }

  updateRecord(form: NgForm) {
    
    this.service.putContact(form.value).subscribe(res => {
        alert("Update Succesfully");
        this.service.refreshList();

    })

  }

  addNew() {
    this.resetForm();
  }




}
