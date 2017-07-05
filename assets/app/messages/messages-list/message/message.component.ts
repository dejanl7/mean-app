import { Component, OnInit, Input, Output } from '@angular/core';
import { Message } from "../../message.model";
import { MessagesService } from "../../messages.service";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
    @Input('inputMessage') message: Message;
    

    constructor(private messagesService: MessagesService) { }

    ngOnInit() {
    }

    /*===========================
        Methodes
    =============================*/
    onEdit() {
        this.messagesService.editMessage(this.message);
    }

    onDelete(){
        this.messagesService.deleteMessage(this.message)
            .subscribe(
                result => console.log(result)
            );
    }

    belongsToUser() {
        return localStorage.getItem('userId') == this.message.userId;
    }

}
