import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostContentComponent } from './forum/post-content/post-content.component';
import { PostsListComponent } from './forum/posts-list/posts-list.component';


const routes: Routes = [
  // check with the default path
  { path: '', component: PostsListComponent },
  {path: 'entries/:id', component: PostContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
