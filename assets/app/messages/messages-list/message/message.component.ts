import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Message } from "../../message.model";
import { MessagesService } from "../../messages.service";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
    @Input('inputMessage') message: Message;
    @Output() editClicked = new EventEmitter<string>();
    
    
    constructor(private messagesService: MessagesService) { }

    ngOnInit() {
    }

    /*===========================
        Methodes
    =============================*/
    onEdit() {
        this.editClicked.emit('A new value');
    }

    onDelete(){
        this.messagesService.deleteMessage(this.message);
    }


}
