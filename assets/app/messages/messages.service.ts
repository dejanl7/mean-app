import { Injectable } from '@angular/core';
import { Message } from "./message.model";


@Injectable()

export class MessagesService {
    constructor() {}

    private messages: Message[] = [];

    /*=====================
        Methodes
    ========================*/
    // Add New Message
    addMessage(message: Message) {
        this.messages.push(message);
        console.log(this.messages);
    }

    // Get Messages
    getMessages(){
        return this.messages;
    }

    // Delete Message
    deleteMessage(message: Message){
        this.messages.splice(this.messages.indexOf(message), 1);
    }
}
