import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
public message:string;
  constructor(public contactService: ContactService) { }

  ngOnInit(): void {
  }
  contact(contactForm:NgForm){
    if(!contactForm.valid) return;
    const formulario=contactForm.value;
    this.message= "Thank you for contacting us";
    setTimeout(() => this.message="", 2500)
    this.contactService.contact(formulario)
    .subscribe(
      res=>{
        console.log('res');
      },
      err=>console.error(err)
    )
    contactForm.reset();
  }
}
