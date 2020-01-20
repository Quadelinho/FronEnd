import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-content',
  templateUrl: './post-content.component.html',
  styleUrls: ['./post-content.component.css']
})
export class PostContentComponent implements OnInit {

  title: string;
  description: string;
  author: string;
  comments: string [];
  createdDate: string;
  content: string;
  postId;
  constructor(/*private route: ActivatedRoute*/) { }

  ngOnInit() {
    //this.route.paramMap.subscribe(params => {this.postId=params.get('postId')})
  }

}
