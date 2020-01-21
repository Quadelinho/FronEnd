import { Component, OnInit } from '@angular/core';

import { postsData } from '../../posts-data';
import { DataProviderService } from '../data-provider.service';
import { IPost } from '../ipost';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  posts; // : IPost []; // postsData; /* = [
//    {postId: 1, title: '1st post', description: 'Description'},
//    {postId: 2, title: 'Another post', description: 'Dsc'}
//  ];*/
  constructor(private dataProviderService: DataProviderService) {
    // this.posts.push({title: 'First post', description: 'This is the first post'});
    // this.posts.push({title: 'Another post', description: 'Is this a description?'});
   }

  ngOnInit() {
    console.log('Entered onInit for getPosts');
    this.posts = this.dataProviderService.getPosts();
  }

}
