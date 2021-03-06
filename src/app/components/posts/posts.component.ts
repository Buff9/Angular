import { Component, OnInit } from '@angular/core';
import {PostsService} from "../../services/posts.service";
import {IPosts} from "../../models/IPosts";


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private postsService: PostsService) { }

  posts: IPosts[] = [];



  ngOnInit(): void{
    this.postsService.getPosts().subscribe(value => this.posts = value);
  }

}
