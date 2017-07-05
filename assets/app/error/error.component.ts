import { Component, OnInit } from '@angular/core';
import { Errors } from "./error.model";

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})

export class ErrorComponent implements OnInit {
    error: Errors;
    display = 'none';

    constructor() { }

    ngOnInit() {}


    /*==========================
        Methods
    ============================*/
    onErrorHandled() {
        this.display = 'none';
    }
}
