import { Component, OnInit } from '@angular/core';

import { postsData } from '../../posts-data';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  posts = postsData; /* = [
    {postId: 1, title: '1st post', description: 'Description'},
    {postId: 2, title: 'Another post', description: 'Dsc'}
  ];*/
  constructor() {
    // this.posts.push({title: 'First post', description: 'This is the first post'});
    // this.posts.push({title: 'Another post', description: 'Is this a description?'});
   }

  ngOnInit() {
  }

}
