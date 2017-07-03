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
        const message = new Message(form.value.content, 'Max');
        
        this.messagesService.addMessage(message)
            .subscribe(
                data     => console.log(data),
                error    => console.log(error)
            )
        ;
        form.resetForm();
    }
}
