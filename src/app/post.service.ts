import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from './post';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = [];
  private updatedPosts = new Subject<Post[]>();
  constructor(private http: HttpClient) { }
  getPosts() {
    this.http.get<{message: string, posts: any}>('http://localhost:3000/api/post')
    .pipe(map((response) => {
      return response.posts.map(post => {
        return {
          title: post.title,
          content: post.content,
          id: post._id
        };
      });
    }))
    .subscribe((mappedPost) => {
      this.posts = mappedPost;
      this.updatedPosts.next([...this.posts]);
    },
     (error) => {
       console.log(error);
     });
  }

  getUpdatedPost() {
    return this.updatedPosts.asObservable();
  }

  addPosts(id: string, title: string, content: string) {
    const post: Post = {id, title, content};
    this.http.post<{message: string, postId: string}>('http://localhost:3000/api/post', post)
    .subscribe((response) => {
      const pid = response.postId;
      post.id = pid;
      this.posts.push(post);
      this.updatedPosts.next([...this.posts]);
    }, (error) => {
      console.log(error);
    });
  }

  deletePosts(id: string) {
    this.http.delete('http://localhost:3000/api/post/' + id)
    .subscribe((response) => {
      const newpostlist = this.posts.filter(post => post.id !== id);
      this.posts = newpostlist;
      this.updatedPosts.next([...this.posts]);
    });
  }
}
