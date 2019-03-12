import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../model/post';
import {PostService} from '../service/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() posts: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this. posts = this.postService.posts;
  }

}
