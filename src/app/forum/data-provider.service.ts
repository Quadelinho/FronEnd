import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPost } from './ipost';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  posts = [];
  constructor(private http: HttpClient) { }

  getPosts(): Observable<IPost[]> {
    console.log('Entered getPosts');
    // return this.http.get<IPost>('/assets/posts-data-j.json');
    // return this.http.get<IPost>('https://localhost:5001/api/posts');
    return this.http.get<IPost[]>('https://localhost:44302/api/posts');
  }

  async getSpecificPost(id: number): Promise<IPost> {
    console.log('Entered getSpecificPosts, id: ' + id);
    // return this.http.get<IPost>('/assets/posts-data-j.json');
    // return this.http.get<IPost>('https://localhost:5001/api/posts');
    await this.http.get<IPost>('https://localhost:44302/api/posts/' + id).toPromise().then(d => {
       this.posts.push(d as IPost); console.log('got post: id =' + (d as IPost).id); });
    return this.posts[0];
  }
}
