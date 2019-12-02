import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AuthComponent } from '../auth/auth.component';
import { LoginComponent } from '../login/login.component';

// export interface DialogData {
//   email: string;
//   password: string;
// }

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  // email: string;
  // password: string;

  // constructor(public dialog: MatDialog) { }

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(LoginComponent, {
      
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     // console.log('The dialog was closed');
  //     // this.email = result;
  //   });
  // }


  ngOnInit() {
  }

}
