import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForumRoutingModule } from './forum-routing.module';
import { PostsListComponent } from './posts-list/posts-list.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { PostContentComponent } from './post-content/post-content.component';


@NgModule({
  declarations: [PostsListComponent, SearchBarComponent, PostContentComponent],
  imports: [
    CommonModule,
    ForumRoutingModule
  ],
  exports: [
    SearchBarComponent,
    PostsListComponent,
    PostContentComponent
  ]
})
export class ForumModule { }
