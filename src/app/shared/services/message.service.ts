import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from 'src/app/home/models/message.model';
@Injectable({
    providedIn: 'root',
})
export class MessageService {
    url: string;

    constructor(private http: HttpClient) {
        this.url = 'https://jsonplaceholder.typicode.com/comments'
    }

    getMessage(){
        return this.http.get<Message[]>(this.url);
    }

    getMessageById(id) {
        return this.http.get<Message[]>(this.url+`?id=/${id}`);
    }
}