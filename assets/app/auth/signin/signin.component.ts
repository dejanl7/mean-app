import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  myForm: FormGroup;
    
    constructor() { }

    ngOnInit() {
        this.myForm = new FormGroup({
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
            ]),
            password: new FormControl(null, Validators.required)
        });
    }

  /*===========================
      Methodes
  =============================*/
    onSubmit(){
        console.log(this.myForm);
    }

}
