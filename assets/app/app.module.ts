import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";
import { AuthComponent } from './auth/auth.component';
import { MessagesComponent } from './messages/messages.component';
import { MessagesListComponent } from './messages/messages-list/messages-list.component';
import { MessagesInputComponent } from './messages/messages-input/messages-input.component';
import { MessageComponent } from './messages/messages-list/message/message.component';

@NgModule({
    declarations: [
        AppComponent, 
        AuthComponent, 
        MessagesComponent, MessagesListComponent, MessagesInputComponent, MessageComponent
    ],
    imports: [BrowserModule, FormsModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}