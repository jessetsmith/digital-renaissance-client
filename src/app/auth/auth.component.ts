import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  email: string;
  password: string;
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  // constructor(
  //   public dialogRef: MatDialogRef<AuthComponent>,
  //   @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  //   onNoClick(): void {
  //     this.dialogRef.close();
  //   }

  ngOnInit() {
  }

}
