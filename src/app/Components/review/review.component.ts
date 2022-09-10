import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostService } from '../post.service';
import { MatDialog } from '@angular/material/dialog';
import { LocalStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';


@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  posts:any;
  id: any;

  constructor(private  postService:PostService, private dialogRef : MatDialog, private http: HttpClient,private localStorage:LocalStorageService,private router:Router) { 
    this.postService.getPostByid().subscribe((res) => {
    this.posts = res;
    });
  }

  ngOnInit(): void {
  }
  setId(id: number) {
    this.id = id;
    this.localStorage.store('postId', this.id);
  }

  deletepost(id: number){
    this.id = id;
    this.localStorage.store('deleteId', this.id);
    let deleteId = id;
    this.postService.deletePostByid().subscribe((res) => {
      location.reload();
    },(err) => {
      location.reload();
    });
    this.router.navigateByUrl("/catalogue");
  }
}
