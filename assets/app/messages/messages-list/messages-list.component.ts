import { Component, OnInit } from '@angular/core';
import { Message } from "../message.model";
import { MessagesService } from "../messages.service";

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.css']
})
export class MessagesListComponent implements OnInit {
    messages: Message[] = [];
    
    constructor( private messagesService: MessagesService ) { }

    ngOnInit() {
        this.messages = this.messagesService.getMessages();
    }

    /*=========================
        Methodes
    ===========================*/
    
}
