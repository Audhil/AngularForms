import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ReactiveFormcontrolComponent } from './reactive-formcontrol/reactive-formcontrol.component';
import { ReactiveFormgroupComponent } from './reactive-formgroup/reactive-formgroup.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormcontrolComponent,
    ReactiveFormgroupComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
