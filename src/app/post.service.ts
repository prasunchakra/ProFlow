import { Injectable } from '@angular/core';
import {  } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = [];
  constructor() { }
  getPosts() {
    return this.posts;
  }
  addPosts(title: string, content: string) {
    const post: Post = {title, content};
    this.posts.push(post);
  }
}
