import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";
import { AuthComponent } from './auth/auth.component';
import { MessagesComponent } from './messages/messages.component';
import { MessagesListComponent } from './messages/messages-list/messages-list.component';
import { MessagesInputComponent } from './messages/messages-input/messages-input.component';
import { MessageComponent } from './messages/messages-list/message/message.component';
import { HeaderComponent } from './header/header.component';
import { routing } from "./app.routing";
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { LogoutComponent } from './auth/logout/logout.component';

@NgModule({
    declarations: [
        AppComponent, 
        AuthComponent, 
        MessagesComponent, 
        MessagesListComponent, 
        MessagesInputComponent, 
        MessageComponent, 
        HeaderComponent, 
        SignupComponent, 
        SigninComponent, 
        LogoutComponent
    ],
    imports: [BrowserModule, FormsModule, routing, ReactiveFormsModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}