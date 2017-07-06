var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { ErrorService } from "../error/error.service";
var AuthService = (function () {
    function AuthService(http, errorService) {
        this.http = http;
        this.errorService = errorService;
    }
    /*=========================
        Methods
    ============================ */
    // Add New User
    AuthService.prototype.signup = function (user) {
        var _this = this;
        var body = JSON.stringify(user);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(' http://simple.sdl-profile.net/user', body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            _this.errorService.handleError(error.json());
            return Observable.throw(error.json());
        });
    };
    // Login
    AuthService.prototype.signin = function (user) {
        var _this = this;
        var body = JSON.stringify(user);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(' http://simple.sdl-profile.net/user/signin', body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            _this.errorService.handleError(error.json());
            return Observable.throw(error.json());
        });
    };
    // Logout
    AuthService.prototype.logout = function () {
        localStorage.clear();
    };
    // Check if is token or not (logged in or not)
    AuthService.prototype.isLoggedIn = function () {
        return localStorage.getItem('token') !== null;
    };
    return AuthService;
}());
AuthService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http, ErrorService])
], AuthService);
export { AuthService };
