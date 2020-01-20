import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForumModule } from './forum/forum.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ForumModule,
    // RouterModule.forRoot()[
    //   { path: '', component: PostsListComponent },
    //   {path: 'posts/:postId', component: PostContentComponent}
    // ]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
