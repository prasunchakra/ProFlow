import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostService } from '../post.service';
import { Post } from '../post';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  private postsubscription: Subscription;
  constructor(public postservice: PostService) { }

  ngOnInit() {
    this.postservice.getPosts();
    this.postsubscription = this.postservice.getUpdatedPost().subscribe((response) => {
      this.posts = response;
    });
  }
  onDelete(postID) {
    this.postservice.deletePosts(postID);
  }
  ngOnDestroy() {
    this.postsubscription.unsubscribe();
  }

}
