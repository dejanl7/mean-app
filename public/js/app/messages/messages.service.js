var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Http, Headers } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Message } from "./message.model";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { ErrorService } from "../error/error.service";
var MessagesService = (function () {
    function MessagesService(http, errorService) {
        this.http = http;
        this.errorService = errorService;
        this.messages = [];
        this.messageIsEdit = new EventEmitter();
    }
    /*=====================
        Methodes
    ========================*/
    // Add New Message
    MessagesService.prototype.addMessage = function (message) {
        var _this = this;
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var body = JSON.stringify(message);
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this.http.post(' http://simple.sdl-profile.net/message' + token, body, { headers: headers })
            .map(function (response) {
            var result = response.json();
            var serverMessage = new Message(result.obj.content, result.obj.user.firstName, result.obj._id, result.obj.user._id);
            _this.messages.push(serverMessage);
        })
            .catch(function (error) {
            _this.errorService.handleError(error.json());
            return Observable.throw(error.json());
        });
    };
    // Get Messages
    MessagesService.prototype.getMessages = function () {
        var _this = this;
        return this.http.get(' http://simple.sdl-profile.net/message')
            .map(function (response) {
            var messages = response.json().obj;
            var transformedMessages = [];
            for (var _i = 0, messages_1 = messages; _i < messages_1.length; _i++) {
                var message = messages_1[_i];
                transformedMessages.push(new Message(message.content, message.user.firstName, message._id, message.user._id));
            }
            _this.messages = transformedMessages;
            return transformedMessages;
        })
            .catch(function (error) {
            _this.errorService.handleError(error.json());
            return Observable.throw(error.json());
        });
    };
    // Edit Message
    MessagesService.prototype.editMessage = function (message) {
        this.messageIsEdit.emit(message);
    };
    // Update Message
    MessagesService.prototype.updateMessage = function (message) {
        var _this = this;
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var body = JSON.stringify(message);
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this.http.patch(' http://simple.sdl-profile.net/message/' + message.messageId + token, body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            _this.errorService.handleError(error.json());
            return Observable.throw(error.json());
        });
    };
    // Delete Message
    MessagesService.prototype.deleteMessage = function (message) {
        var _this = this;
        this.messages.splice(this.messages.indexOf(message), 1);
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this.http.delete(' http://simple.sdl-profile.net/message/' + message.messageId + token)
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            _this.errorService.handleError(error.json());
            return Observable.throw(error.json());
        });
    };
    return MessagesService;
}());
MessagesService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http, ErrorService])
], MessagesService);
export { MessagesService };
