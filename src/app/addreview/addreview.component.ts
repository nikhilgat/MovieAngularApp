import { HttpClient } from '@angular/common/http';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addreview',
  templateUrl: './addreview.component.html',
  styleUrls: ['./addreview.component.css']
})
export class AddreviewComponent implements OnInit {

  constructor(private http: HttpClient) {
    this.uploadposts();
  }
  ngOnInit(): void {}
  posts: any[] = [];

 editpost:edit={id:0 ,title:"",description:"",review:"", imageUrl:""}

  loadposts() {
    this.http.get('http://localhost:8080/getposts').subscribe((posts: any) => {
      this.posts = posts;
    });
  }
  uploadposts() {
    this.http.post('http://localhost:8080/postposts', this.editpost).subscribe(
      (res) => {
        alert('Posted Successfully');
        location.reload;
        console.log(this.editpost);
      },
      (err) => {
        alert('Error has occured please enter all the details');
        location.reload;
      }
    );
  }
}
export interface edit{
  id:number
  title:string
  description:string
  review:string
  imageUrl:string
}



