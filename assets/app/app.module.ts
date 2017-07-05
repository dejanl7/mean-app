import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { AuthComponent } from './auth/auth.component';
import { MessagesComponent } from './messages/messages.component';
import { MessagesListComponent } from './messages/messages-list/messages-list.component';
import { MessagesInputComponent } from './messages/messages-input/messages-input.component';
import { MessageComponent } from './messages/messages-list/message/message.component';
import { HeaderComponent } from './header/header.component';
import { routing } from "./app.routing";
import { ErrorComponent } from './error/error.component';

import { AuthService } from "./auth/auth.service";
import { ErrorService } from "./error/error.service";

@NgModule({
    declarations: [
        AppComponent, 
        AuthComponent, 
        MessagesComponent, 
        MessagesListComponent, 
        MessagesInputComponent, 
        MessageComponent, 
        HeaderComponent, 
        ErrorComponent
    ],
    imports: [
        BrowserModule, 
        FormsModule, 
        routing,
        HttpModule
    ],
    providers: [AuthService, ErrorService],
    bootstrap: [AppComponent]
})
export class AppModule {

}