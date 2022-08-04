import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  getErrorEmail() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  
  constructor() { }

  submit(){
    console.log("form Submitted")
  }
  ngOnInit(): void {
  }

}
