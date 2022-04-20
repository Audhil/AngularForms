import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactive-formgroup',
  templateUrl: './reactive-formgroup.component.html',
  styleUrls: ['./reactive-formgroup.component.css']
})
export class ReactiveFormgroupComponent implements OnInit {

  userProfileForm: FormGroup;

  constructor() {
    this.userProfileForm = new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl(''),
        age: new FormControl(''),
        email: new FormControl(''),
      }
    );
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.userProfileForm.value)
    console.log(this.userProfileForm.controls['firstName'].value)
    console.log(this.userProfileForm.get('firstName')?.value)
  }

}
