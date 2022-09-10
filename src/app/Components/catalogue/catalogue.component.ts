import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddreviewComponent } from '../addreview/addreview.component';
import { LocalStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';


@Component({
  selector: 'catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  id:any;
  constructor(private http: HttpClient, private dialogRef : MatDialog,private localStorage:LocalStorageService,private router:Router) {
    this.getposts();
  }
  posts:any="";
  
  getposts(){
    var token = LoginService.getToken()
    console.log(token)
    var header = {headers: new HttpHeaders().set('Authorization',  `Bearer ${token}`)
    }
    
    this.http.get('http://localhost:8080/getposts', header).subscribe(
      (Response:any)  => {
        console.log(Response);
          this.posts = Response;

      }
    )
  }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialogRef.open(AddreviewComponent, {
    panelClass: 'dialog-container-custom' 
    });
  }
  
  setId(id: number) {
    this.id = id;
    this.localStorage.store('postId', this.id);
    this.router.navigateByUrl("/review");
  }

}