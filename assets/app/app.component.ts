import { Component } from '@angular/core';
import { Message } from "./messages/message.model";
import { MessagesService } from "./messages/messages.service";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'], 
    providers: [MessagesService]
})
export class AppComponent {

}