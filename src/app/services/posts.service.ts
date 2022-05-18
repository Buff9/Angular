import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPosts} from "../models/IPosts";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private url = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private httpclient: HttpClient) {

  }

  getPosts(): Observable<IPosts[]>{
    return this.httpclient.get<any>(this.url)
  }
}
