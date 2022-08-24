import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm! : FormGroup
  public registerForm! : FormGroup

  constructor(private http: HttpClient, private formBuilder : FormBuilder, private router: Router) {
    // this.loadUsers();
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

  loadUsers() {
    this.http.get('http://localhost:8080/getusers').subscribe((users: any) => {
      this.users = users;
    });
  }
  uploadUsers() {
  if(this.editUser.name.length>0 && this.editUser.email.length>0 && this.editUser.password.length>0)
    {
    this.http.put('http://localhost:8080/updateusers', this.editUser).subscribe(
      (res) => {
        alert('Registered Successfully');
        location.reload;
        this.registerForm.reset();
        this.router.navigate(['home']);
        console.log(this.editUser);
      },
    );
    }
      else
      {
        alert('Error has occured please enter valid details');
          }
      }
  }

export interface edit{
  id:number
  name:string
  email:string
  password:string
}
