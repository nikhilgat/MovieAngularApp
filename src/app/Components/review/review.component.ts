import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup} from '@angular/forms';
import { CatalogueComponent } from '../catalogue/catalogue.component';
import { HttpClient } from '@angular/common/http';
import { PostService } from '../post.service';
import { PostPayload } from '../PostPayload';
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
    // this.router.navigateByUrl("/review");
  }

  deletepost(id: number){
    this.id = id;
    this.localStorage.store('deleteId', this.id);
    let deleteId = this.localStorage.retrieve('deleteId');
    this.localStorage.store('deleteId', this.id);
    this.http.delete('http://localhost:8080/deleteposts/'+ deleteId).subscribe((res) => {
      location.reload();
    },(err) => {
      location.reload();
    });
    this.router.navigateByUrl("/catalogue");
  }
}
