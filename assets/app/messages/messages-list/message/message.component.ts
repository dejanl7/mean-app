import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Message } from "../../message.model";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
    @Input('inputMessage') message: Message;
    @Output() editClicked = new EventEmitter<string>();
    
    
    constructor() { }

    ngOnInit() {
    }

    /*===========================
        Methodes
    =============================*/
    onEdit() {
        this.editClicked.emit('A new value');
    }


}
