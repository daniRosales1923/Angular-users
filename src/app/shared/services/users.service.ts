import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../../home/models/users.model'
import { Post } from 'src/app/home/models/post.model';
@Injectable({
    providedIn: 'root',
})
export class UserService {
    url: string;
    urlPost: string;

    constructor(private http: HttpClient) {
        this.url = 'https://jsonplaceholder.typicode.com/users';
        this.urlPost = 'https://jsonplaceholder.typicode.com/posts'
     }

    getUsers(){
        return this.http.get<User[]>(this.url);
    }

    getDetail(){
        return this.http.get<Post[]>(this.urlPost);
    }
}
