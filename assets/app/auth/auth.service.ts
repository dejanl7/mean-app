import { Injectable } from '@angular/core';
import { User } from "./user.model";
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { ErrorService } from "../error/error.service";

@Injectable()


export class AuthService {

    constructor( private http: Http, private errorService: ErrorService ) { }

    /*=========================
        Methods
    ============================ */
    // Add New User
    signup(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/user', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }
    // Login
    signin(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/user/signin', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                    this.errorService.handleError(error.json());
                    return Observable.throw(error.json());
                });
    }

    // Logout
    logout() {
        localStorage.clear();
    }

    // Check if is token or not (logged in or not)
    isLoggedIn() {
        return localStorage.getItem('token') !== null;
    }
}
