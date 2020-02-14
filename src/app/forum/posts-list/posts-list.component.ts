import { Component, OnInit, ɵINJECTOR_IMPL__POST_R3__ } from '@angular/core';

import { postsData } from '../../posts-data';
import { DataProviderService } from '../data-provider.service';
import { IPost } from '../ipost';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  //postToDisplay: Observable<IPost[]>;
  postToDisplay: IPost;
  posts: Observable<IPost[]>; // : IPost []; // postsData; /* = [
//    {postId: 1, title: '1st post', description: 'Description'},
//    {postId: 2, title: 'Another post', description: 'Dsc'}
//  ];*/
  constructor(private router: Router, private dataProviderService: DataProviderService) {
    // this.posts.push({title: 'First post', description: 'This is the first post'});
    // this.posts.push({title: 'Another post', description: 'Is this a description?'});
   }

  ngOnInit() {
    console.log('Entered onInit for getPosts');
    this.posts = this.dataProviderService.getPosts();
  }

  showDetails(id) {
    console.log('Entered showDetails');

    this.dataProviderService.getSpecificPost(id).then(d => {
      this.postToDisplay = d;
      console.log('value returned by the getSpecificPost: id = ' + this.postToDisplay.id);
    });

    //this.postToDisplay = this.dataProviderService.getSpecificPost(id)[0];
    console.log('post-list.showDetails for post with id=' + this.postToDisplay[0].id);
    this.router.navigate(['/entries/', id]);
  }

}
