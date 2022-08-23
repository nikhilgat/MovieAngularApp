import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup} from '@angular/forms';
import { CatalogueComponent } from '../catalogue/catalogue.component';
import { HttpClient } from '@angular/common/http';
import { PostService } from '../post.service';
import { PostPayload } from '../PostPayload';
import { DeletereviewComponent } from '../deletereview/deletereview.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  gotid:number=0;
  posts:any;

  constructor(private  postService:PostService, private dialogRef : MatDialog) { 
    this.postService.getPostByid().subscribe((res) => {
      this.posts = res;
    });
  }

  deletepost(){
    this.postService.deletePostByid();
  }
  deleteDialog(){
    this.dialogRef.open(DeletereviewComponent)
  }

  ngOnInit(): void {
  }
}
