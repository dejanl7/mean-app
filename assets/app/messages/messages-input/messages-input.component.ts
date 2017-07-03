import { Component, OnInit } from '@angular/core';
import { MessagesService } from "../messages.service";
import { Message } from "../message.model";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-messages-input',
  templateUrl: './messages-input.component.html',
  styleUrls: ['./messages-input.component.css']
})

export class MessagesInputComponent implements OnInit {

    constructor( private messagesService: MessagesService ) { }

    ngOnInit() {}


    /*===========================
        Methodes
    =============================*/
    onSubmit(form: NgForm){
        console.log(form);
        const message = new Message(form.value.content, 'Max');
        this.messagesService.addMessage(message);
        form.resetForm();
    }
}
