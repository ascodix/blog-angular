import { Injectable } from '@angular/core';
import {Post} from '../model/post';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private _posts: Post[] = [];

  public postSubject = new Subject<Post[]>();

  constructor() { }

  private emitPosts() {
    this.postSubject.next(this._posts);
  }

  public addPost(post: Post) {
    this._posts.push(post);
    this.emitPosts();
  }

  public removePost(post: Post) {
    const index: number = this._posts.indexOf(post);
    if (index !== -1) {
      this._posts.splice(index, 1);
    }
    console.log(this._posts);
  }

  get posts(): Post[] {
    return this._posts;
  }

  set posts(value: Post[]) {
    this._posts = value;
  }
}
