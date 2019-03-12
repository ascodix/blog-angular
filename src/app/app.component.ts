import {Component, OnInit} from '@angular/core';
import {Post} from './model/post';
import {PostService} from './service/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private postService: PostService) {

  }

  ngOnInit(): void {
    this.postService.addPost(new Post('Mon premier post', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'));
    this.postService.addPost(new Post( 'Mon deuxième post', 'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. '));
    this.postService.addPost(new Post( 'Encore un post', 'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.'));
  }

}
