import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Post} from '../model/post';
import {PostService} from '../service/post.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  @Input() posts: Post[] = [];
  postSubscription: Subscription;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this. posts = this.postService.posts;

    this.postSubscription = this.postService.postSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }

}
