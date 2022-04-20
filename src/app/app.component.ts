import {Component} from '@angular/core';
import {FormControl} from "@angular/forms";

//  based on tutorial: https://www.youtube.com/watch?v=JEGz8hOeGBY&list=PL9Osfv2HEXE2IDfYv6ORboNc4I-5Vp7cw&ab_channel=TechieOcean
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //  reactive form
  Technologyused = new FormControl('Jack and jill')
  setDefaultValue() {
    // console.log(this.Technologyused.value)
    this.Technologyused.setValue('went up to hill to fetch a pail of water!')
  }

  //  template driven form - directive driven
  // Technologyused = ''
}
