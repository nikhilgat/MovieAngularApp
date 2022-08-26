import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {PostPayload} from '../PostPayload';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addreview',
  templateUrl: './addreview.component.html',
  styleUrls: ['./addreview.component.scss']
})
export class AddreviewComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) {
  }
  
  ngOnInit(): void {}
  posts: any[] = [];

 editpost:PostPayload={id:"" ,title:"",description:"",review:"", imageUrl:""}

  loadposts() {
    this.http.get('http://localhost:8080/getposts').subscribe((posts: any) => {
      this.posts = posts;
    });
  }
  uploadposts() {
    if(
      this.editpost.title.length>0 && this.editpost.title.length<25 
      && this.editpost.description.length>0 && this.editpost.description.length<250 
      && this.editpost.imageUrl.length>0 
      && this.editpost.review.length>0

      )
    {
      this.http.post('http://localhost:8080/postposts', this.editpost).subscribe(
        (res) => {
          alert('Posted Successfully');
          location.reload();
          console.log(this.editpost);
          this.router.navigate(['catalogue']);

        },
      );
    }
  else{
    alert('Error has occured please enter all the details');
  }
  }
}

