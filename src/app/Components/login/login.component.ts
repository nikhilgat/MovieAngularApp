import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private http: HttpClient) {
    this.loadPosts();
  }
  ngOnInit(): void {}
  
  posts: any[] = [];

 editpost:edit={id:0 ,name:"",email:"",password:""}

  loadPosts() {
    this.http.get('http://localhost:8080/get').subscribe((posts: any) => {
      this.posts = posts;
    });
  }
  uploadPost() {
    this.http.put('http://localhost:8080/put', this.editpost).subscribe(
      (res) => {
        alert('Registered Successfully');
        location.reload;
        console.log(this.editpost);
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
