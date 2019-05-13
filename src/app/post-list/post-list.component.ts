import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  post: Post[] = [];
  constructor(public postservice: PostService) { }

  ngOnInit() {
    this.post = this.postservice.getPosts();
  }

}
