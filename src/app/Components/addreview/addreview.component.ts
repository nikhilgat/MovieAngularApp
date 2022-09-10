import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import {PostPayload} from '../PostPayload';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';

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

  getposts() {
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
      var token = LoginService.getToken()
      console.log(token)
      var header = {headers: new HttpHeaders().set('Authorization',  `Bearer ${token}`)
      }
      this.http.post('http://localhost:8080/postposts', this.editpost, header).subscribe(
        (response) => {
          alert('Posted Successfully');
          location.reload();
          console.log(this.editpost);
          this.router.navigate(['catalogue']);

        },
        Error =>{
          console.log("Error occurred while adding a review");
        }
      );
    }
  else{
    alert('Error has occured please enter all the details');
  }
  }
}

