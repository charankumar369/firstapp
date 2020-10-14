import { Component, OnInit,ViewChild} from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import {Feedback,ContactType} from '../shared/Feedback';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @ViewChild('fform') feedbackFormDirective; 

   feedbackForm: FormGroup;
   feedback:Feedback;
   contactType=ContactType;
  constructor(private fb:FormBuilder) {
    this.feedbackForm = this.fb.group({
      firstname: ['', Validators.required ],
      lastname: ['', Validators.required ],
      telnum: ['', Validators.required ],
      email: ['', Validators.required ],
      agree: [false],
      contacttype: ['None'],
      message: ['']
    });
   }

  ngOnInit(): void {
  }




  onSubmit() {
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    this.feedbackForm.reset({
      firstname: '',
      lastname: '',
      telnum: '',
      email: '',
      agree: false,
      contacttype: 'None',
      message: ''
    });
    this.feedbackFormDirective.resetForm();
  }
}
