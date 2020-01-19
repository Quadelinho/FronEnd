import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForumRoutingModule } from './forum-routing.module';
import { PostsListComponent } from './posts-list/posts-list.component';
import { SearchBarComponent } from './search-bar/search-bar.component';


@NgModule({
  declarations: [PostsListComponent, SearchBarComponent],
  imports: [
    CommonModule,
    ForumRoutingModule
  ],
  exports: [
    PostsListComponent,
    SearchBarComponent
  ]
})
export class ForumModule { }
