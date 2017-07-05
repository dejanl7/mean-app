var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
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
], AppModule);
export { AppModule };
