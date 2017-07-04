import { Http, Response, Headers } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Message } from "./message.model";
import 'rxjs/Rx';
import { Observable } from "rxjs";


@Injectable()


export class MessagesService {
    private messages: Message[] = [];
    messageIsEdit = new EventEmitter<Message>();
    

    constructor(private http: Http) {}

    /*=====================
        Methodes
    ========================*/
    // Add New Message
    addMessage(message: Message) {
        const headers   = new Headers({ 'Content-Type': 'application/json' });
        const body      = JSON.stringify(message);
        return this.http.post('http://localhost:3000/message', body, {headers: headers})
            .map( (response: Response) => {
                const result        = response.json();
                const serverMessage = new Message(result.obj.content, 'Dummy', result.obj._id, null);
                this.messages.push(serverMessage);
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    // Get Messages
    getMessages(){
        return this.http.get('http://localhost:3000/message')
            .map((response: Response) => {
                const messages  = response.json().obj;
                let transformedMessages: Message[] = [];
                
                for( let message of messages ) {
                    transformedMessages.push(new Message(message.content, 'Dummy', message._id, null));
                }

                this.messages = transformedMessages;

                return transformedMessages;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    // Edit Message
    editMessage(message: Message){
        this.messageIsEdit.emit(message);
    }


    // Update Message
    updateMessage(message: Message){
        const headers   = new Headers({ 'Content-Type': 'application/json' });
        const body      = JSON.stringify(message);
        return this.http.patch('http://localhost:3000/message/' + message.messageId, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }


    // Delete Message
    deleteMessage(message: Message){
        this.messages.splice(this.messages.indexOf(message), 1);
        return this.http.delete('http://localhost:3000/message/' + message.messageId )
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }
}
