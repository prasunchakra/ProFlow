import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  constructor(public postservice: PostService) { }

  ngOnInit() {
  }
  onAddPost(form: NgForm) {
    if (!form.valid) {
      return;
    }
    console.log(this.postservice.getPosts());
    this.postservice.addPosts(form.value.title, form.value.content);
    form.resetForm();
  }
}
