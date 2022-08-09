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
    this.loadUsers();
  }
  ngOnInit(): void {}
  users: any[] = [];

 editUser:edit={id:0 ,name:"",email:"",password:""}

  loadUsers() {
    this.http.get('http://localhost:8080/get').subscribe((users: any) => {
      this.users = users;
    });
  }
  uploadUsers() {
    this.http.put('http://localhost:8080/put', this.editUser).subscribe(
      (res) => {
        alert('Registered Successfully');
        location.reload;
        console.log(this.editUser);
      },
      (err) => {
        alert('Error has occured please enter valid details');
        location.reload;
      }
    );
  }
}
export interface edit{
  id:number
  name:string
  email:string
  password:string
}
