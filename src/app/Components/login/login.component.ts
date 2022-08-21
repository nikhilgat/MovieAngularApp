import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient) {
    // this.loadUsers();
  }
  ngOnInit(): void {}
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
