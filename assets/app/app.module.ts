import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";
import { AuthComponent } from './auth/auth.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
    declarations: [AppComponent, AuthComponent, MessagesComponent],
    imports: [BrowserModule, FormsModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}