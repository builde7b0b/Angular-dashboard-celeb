import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'play';
  panelOpenState = false;

  myForm = new FormGroup({
    myControl: new FormControl()
  });
  

}
