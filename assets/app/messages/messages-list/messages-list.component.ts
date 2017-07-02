import { Component, OnInit } from '@angular/core';
import { Message } from "../message.model";

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.css']
})
export class MessagesListComponent implements OnInit {
    messages: Message[] = [
        new Message('Some message', 'Dejan'),
        new Message('Something else', 'Strahinja'),
        new Message('3rd Message', 'Mike')
    ];
    
    constructor() { }

    ngOnInit() {
    
    }
    
}
