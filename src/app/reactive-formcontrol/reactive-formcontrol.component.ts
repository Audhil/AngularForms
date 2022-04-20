import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-reactive-formcontrol',
  templateUrl: './reactive-formcontrol.component.html',
  styleUrls: ['./reactive-formcontrol.component.css']
})
export class ReactiveFormcontrolComponent implements OnInit {

  email = new FormControl('')

  updateEmail(){
    this.email.setValue('jack@jill.com')
  }

  constructor() { }

  ngOnInit(): void {
  }

}
