import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(public contactService: ContactService) { }

  ngOnInit(): void {
  }
  contact(contactForm:NgForm){
    console.log('hola')
    if(!contactForm.valid) return;
    const formulario=contactForm.value;
    this.contactService.contact(formulario)
    .subscribe(
      res=>{
        console.log(res);
        // this.message=res.message;
        // setTimeout(() => this.message="", 2500)
      },
      err=>console.error(err)
    )
    contactForm.reset();
  }
}
