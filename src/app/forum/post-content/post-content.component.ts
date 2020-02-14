import { Component, OnInit, Input } from '@angular/core';
import { IPost } from '../ipost';
import { ActivatedRoute } from '@angular/router';
import { DataProviderService } from '../data-provider.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-content',
  templateUrl: './post-content.component.html',
  styleUrls: ['./post-content.component.css']
})
export class PostContentComponent implements OnInit {

  //postToDisplay: Observable<IPost[]>; // IPost;
  postToDisplay: IPost;
  post: IPost;
  title: string;
  description: string;
  author: string;
  comments: string [];
  createdDate: string;
  content: string;
  id;
  constructor(private route: ActivatedRoute, private dataProviderService: DataProviderService) {
    console.log('Build content component');
   }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {this.id = params.get('id'); } );
    console.log('PostContent onInit, id: ' + this.id);
    /*this.postToDisplay = */
    this.dataProviderService.getSpecificPost(this.id).then(d => {
      this.postToDisplay = d;
      console.log('value returned by the getSpecificPost: id = ' + this.postToDisplay.id);
    });
    // console.log('after the service, post title:' + this.postToDisplay.title);
    if (this.postToDisplay === null) {
      console.log('empty post');
    }
    else {
      console.log('not empty block');
    }
  }

}
