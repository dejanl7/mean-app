var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { MessagesService } from "../messages.service";
import { Message } from "../message.model";
var MessagesInputComponent = (function () {
    function MessagesInputComponent(messagesService) {
        this.messagesService = messagesService;
    }
    MessagesInputComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messagesService.messageIsEdit.subscribe(function (messageSubscribed) { return _this.message = messageSubscribed; });
    };
    /*===========================
        Methodes
    =============================*/
    // Save
    MessagesInputComponent.prototype.onSubmit = function (form) {
        // Edit Message
        if (this.message) {
            this.message.content = form.value.content;
            this.message.username = 'dejanfx';
            this.messagesService.updateMessage(this.message)
                .subscribe(function (result) { return console.log(result); });
            this.message = null;
        }
        else {
            var message = new Message(form.value.content, 'Max');
            this.messagesService.addMessage(message)
                .subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
        }
        form.resetForm();
    };
    // Clear form
    MessagesInputComponent.prototype.onClear = function (form) {
        this.message = null;
        form.resetForm();
    };
    return MessagesInputComponent;
}());
MessagesInputComponent = __decorate([
    Component({
        selector: 'app-messages-input',
        templateUrl: './messages-input.component.html',
        styleUrls: ['./messages-input.component.css']
    }),
    __metadata("design:paramtypes", [MessagesService])
], MessagesInputComponent);
export { MessagesInputComponent };
