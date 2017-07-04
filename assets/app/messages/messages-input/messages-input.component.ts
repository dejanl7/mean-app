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
    message: Message;

    constructor( private messagesService: MessagesService ) { }

    ngOnInit() {
        this.messagesService.messageIsEdit.subscribe(
            (messageSubscribed: Message) => this.message = messageSubscribed
        );
    }


    /*===========================
        Methodes
    =============================*/
    // Save
    onSubmit(form: NgForm){
        // Edit Message
        if( this.message ){
            this.message.content = form.value.content;
            this.message.username = 'dejanfx';
            this.messagesService.updateMessage(this.message)
                .subscribe(
                    result => console.log(result)
                );
            this.message = null;
        }
            // Insert New Message
            else {
                const message = new Message(form.value.content, 'Max');
                this.messagesService.addMessage(message)
                    .subscribe(
                        data     => console.log(data),
                        error    => console.log(error)
                    );
            }

            form.resetForm();
    }

    // Clear form
    onClear(form: NgForm){
        this.message = null;
        form.resetForm();
    }
}
