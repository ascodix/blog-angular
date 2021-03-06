import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../model/post';
import {PostService} from '../service/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  public onLoveIt() {
    this.postService.changeLoveIt(this.post);
  }

  public onDontLoveIt() {
    this.postService.changeDontLoveIt(this.post);
  }

  public onRemovePost(post: Post) {
    this.postService.removePost(post)
  }
}
