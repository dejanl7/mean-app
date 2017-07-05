import { Component, OnInit } from '@angular/core';
import { Errors } from "./error.model";
import { ErrorService } from "./error.service";


@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})


export class ErrorComponent implements OnInit {
    error: Errors;
    display = 'none';

    constructor(private errorsService:ErrorService) { }

    ngOnInit() {
        this.errorsService.errorOccured
            .subscribe(
                (error: Errors) => {
                    this.error = error;
                    this.display = 'block';
                }
            );
    }


    /*==========================
        Methods
    ============================*/
    onErrorHandled() {
        this.display = 'none';
    }
}
