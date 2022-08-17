import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddreviewComponent } from '../addreview/addreview.component';
import { DeletereviewComponent } from '../deletereview/deletereview.component';
import { TestComponent } from '../test/test.component';

@Component({
  selector: 'catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  constructor(private http: HttpClient, private dialogRef : MatDialog ) {
    this.loadposts();
  }
  posts: any[] = [];
  
  loadposts() {
    this.http.get('http://localhost:8080/getposts').subscribe((posts: any) => {
      this.posts = posts;
    });
  }

  ngOnInit(): void {
  }

  openDialog(){
    this.dialogRef.open(AddreviewComponent)
  }
  deleteDialog(){
    this.dialogRef.open(DeletereviewComponent)
  }

  // deletepost:edit={
  //   id: 0,
  //   title: '',
  //   description: '',
  //   review: '',
  //   imageUrl: ''
  // }

//   deleteposts() {
//     this.http.get('http://localhost:8080/deleteposts/{id}').subscribe((posts: any) => {
//       this.posts = posts;
//     });
// }

}
// export interface edit{
//   id: number
// }