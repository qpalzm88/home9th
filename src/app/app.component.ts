import { Component } from '@angular/core';
import { AppService } from './app.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent, DialogData } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  user: any;
  searchName = "";
  searchEmail = "";
  searchAddress = "";

  constructor(public serv: AppService, public dialog: MatDialog) {
    serv.load().subscribe((data) => {
      //console.log(data);
      this.user = data;
    });
  }

  onShow(user: any) {
    var coor: DialogData = new DialogData(user?.address?.geo?.lat, user?.address?.geo?.lng);
    this.dialog.open(DialogComponent, { width: '300px', height: '200px', data: { coor } });
  }
}

