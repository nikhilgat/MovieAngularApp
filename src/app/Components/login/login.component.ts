import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm! : FormGroup
  public registerForm! : FormGroup

  credentials = {
    username : "",
    password : ""
  } 

  constructor(private http: HttpClient, private formBuilder : FormBuilder, private router: Router, private loginService:LoginService) {
  }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      loginEmail:['',Validators.required],
      loginPassword:['',Validators.required]
    })
    this.registerForm = this.formBuilder.group({
      username:['',Validators.required],
      registerEmail:['',Validators.required],
      registerPassword:['',Validators.required]
    })

  }
  users: any[] = [];

 editUser:edit={id:0 ,name:"",email:"",password:""}

  register() {
  if(this.editUser.name.length>0 && this.editUser.email.length>0 && this.editUser.password.length>0)
    {
    this.http.post('http://localhost:8080/saveusers', this.editUser).subscribe(
      (res) => {
        alert('Registered Successfully');
        this.registerForm.reset();
        // console.log(this.editUser);
      },
    );
    }
      else
      {
        alert('Error has occured please enter valid details');
          }
      }

      login()
  {
    if((this.credentials.username!="" && this.credentials.password!="") || (this.credentials.username!=null && this.credentials.password!=null)){
      console.log("form is submitted");

      this.loginService.generateToken(this.credentials).subscribe(
        (Response:any)  => {
          console.log(Response);
          this.loginService.loginUser(Response.token);
          window.location.href="/catalogue";
        },
        Error =>{
          console.log(Error);
        }
      )
    }
    else{
      console.log("values are invalid");
    }
  }
  }

export interface edit{
  id:number
  name:string
  email:string
  password:string
}
