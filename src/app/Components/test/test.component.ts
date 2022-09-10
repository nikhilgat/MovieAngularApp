import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  credentials = {
    email : "",
    password : ""
  } 

  constructor() { }

  ngOnInit(): void {
  }

  // onSubmit()
  // {
  //   if((this.credentials.email!="" && this.credentials.password!="") || (this.credentials.email!=null && this.credentials.password!=null)){
  //     console.log("form is submitted");
  //     this.loginService.generateToken(this.credentials).subscribe(
  //       (Response:any)  => {
  //         console.log(Response);
  //         this.loginService.loginUser(Response.token);
  //         window.location.href="/home";
  //       },
  //       Error =>{
  //         console.log(Error);
  //       }
  //     )
  //   }
  //   else{
  //     console.log("values are invalid");
  //   }
  // }
}
