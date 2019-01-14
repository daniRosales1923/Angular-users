import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from 'src/app/home/models/post.model';
@Injectable({
    providedIn: 'root',
})
export class PostService {
    url: string;

    constructor(private http: HttpClient) {
        this.url = 'https://jsonplaceholder.typicode.com/posts'
    }

    getDetail(){
        return this.http.get<Post[]>(this.url);
    }

    getById(id) {
        return this.http.get<Post>(this.url+`/${id}`);
    }
    
    getByIdUser(id) {
        return this.http.get<Post[]>(this.url+`?userId=${id}`);
      }
}