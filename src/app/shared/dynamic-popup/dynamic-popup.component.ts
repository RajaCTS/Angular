import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dynamic-popup',
  templateUrl: './dynamic-popup.component.html',
  styleUrls: ['./dynamic-popup.component.scss']
})
export class DynamicPopupComponent implements OnInit {

  public title: string;
  public message: string;
  public button: string;
  

  constructor(
    public dialogRef: MatDialogRef<DynamicPopupComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.title = this.data.title;
    this.message = this.data.message;
    this.button = this.data.buttonName;
  }

  closePopup(): void{
    this.dialogRef.close();
  }

}
