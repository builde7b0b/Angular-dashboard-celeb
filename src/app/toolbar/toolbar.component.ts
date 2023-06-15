import { Component } from '@angular/core';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';



@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  badgeNumber = 15;

  updateBadge(): void {
    this.badgeNumber++; // Increment the badge number
  }


  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action,{
      duration: 1000
    });
    
  }

}
