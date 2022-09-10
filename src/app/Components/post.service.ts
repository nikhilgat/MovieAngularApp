import { Injectable } from '@angular/core';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from 'ngx-webstorage';
import { PostPayload } from './PostPayload';
import { Observable } from 'rxjs';
import { LoginService } from '../login.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient,private localStorage:LocalStorageService) { }
  
  gotid:number=0;
  posts:any=[];


  getPostByid() {
    var token = LoginService.getToken()
    var header = {headers: new HttpHeaders().set('Authorization',  `Bearer ${token}`)
    }
    let id = this.localStorage.retrieve('postId');
    let url = 'http://localhost:8080/getposts/' + id;
    return this.http.get<Array<PostPayload>>(url,header);
  }

  deletePostByid(){
    var token = LoginService.getToken()
    var header = {headers: new HttpHeaders().set('Authorization',  `Bearer ${token}`)
    }
    let id = this.localStorage.retrieve('postId');
    let url = 'http://localhost:8080/deleteposts/' + id;
    return this.http.delete<Array<PostPayload>>(url,header);
  }

}
