import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPost } from './ipost';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  posts = [];
  constructor(private http: HttpClient) { }

  getPosts() {
    console.log('Entered getPosts');
    // return this.http.get<IPost>('/assets/posts-data-j.json');
    return this.http.get<IPost>('https://localhost:5001/api/posts');
  }
}
