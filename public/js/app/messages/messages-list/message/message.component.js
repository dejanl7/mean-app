var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { Message } from "../../message.model";
import { MessagesService } from "../../messages.service";
var MessageComponent = (function () {
    function MessageComponent(messagesService) {
        this.messagesService = messagesService;
    }
    MessageComponent.prototype.ngOnInit = function () {
    };
    /*===========================
        Methodes
    =============================*/
    MessageComponent.prototype.onEdit = function () {
        this.messagesService.editMessage(this.message);
    };
    MessageComponent.prototype.onDelete = function () {
        this.messagesService.deleteMessage(this.message)
            .subscribe(function (result) { return console.log(result); });
    };
    MessageComponent.prototype.belongsToUser = function () {
        return localStorage.getItem('userId') == this.message.userId;
    };
    return MessageComponent;
}());
__decorate([
    Input('inputMessage'),
    __metadata("design:type", Message)
], MessageComponent.prototype, "message", void 0);
MessageComponent = __decorate([
    Component({
        selector: 'app-message',
        templateUrl: './message.component.html',
        styleUrls: ['./message.component.css']
    }),
    __metadata("design:paramtypes", [MessagesService])
], MessageComponent);
export { MessageComponent };
