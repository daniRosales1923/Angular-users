import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../../home/models/users.model'
@Injectable({
    providedIn: 'root',
})
export class UserService {
    url: string;

    constructor(private http: HttpClient) {
        this.url = 'https://jsonplaceholder.typicode.com/users';
     }

    getUsers(){
        return this.http.get<User[]>(this.url);
    }

    getId(){
        return this.http.get<User[]>(this.url);
    }
}
