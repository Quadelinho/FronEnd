import { Component, OnInit } from '@angular/core';
import { IPost } from '../ipost';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-content',
  templateUrl: './post-content.component.html',
  styleUrls: ['./post-content.component.css']
})
export class PostContentComponent implements OnInit {

  post: IPost;
  title: string;
  description: string;
  author: string;
  comments: string [];
  createdDate: string;
  content: string;
  id;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('PostContent onInit, id: ' + this.id);
     this.route.paramMap.subscribe(params => {this.id = params.get('id'); } );
  }

}
