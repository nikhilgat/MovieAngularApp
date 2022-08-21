import { Injectable } from '@angular/core';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from 'ngx-webstorage';
import { PostPayload } from './PostPayload';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient,private localStorage:LocalStorageService) { }
  
  gotid:number=0;
  posts:any=[];


  getPostByid() {
    let id = this.localStorage.retrieve('postId');
    let url = 'http://localhost:8080/getposts/' + id;
    return this.http.get<Array<PostPayload>>(url);
  }

  deletePostByid(){
    let id = this.localStorage.retrieve('postId');
    let url = 'http://localhost:8080/deleteposts/' + id;
    return this.http.delete<Array<PostPayload>>(url);
  }

}
