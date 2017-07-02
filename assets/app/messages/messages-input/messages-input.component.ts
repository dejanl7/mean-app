import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages-input',
  templateUrl: './messages-input.component.html',
  styleUrls: ['./messages-input.component.css']
})

export class MessagesInputComponent implements OnInit {

    constructor() { }

    ngOnInit() {}

    /*===========================
        Methodes
    =============================*/
    onSave(value: string){
        console.log(value);
    }
}
