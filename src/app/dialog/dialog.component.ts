import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export class DialogData {
  lat: string;
  lng: string;

  constructor(lat: string, lng: string) {
    this.lat = lat;
    this.lng = lng;
  }

}

@Component({
  selector: 'dialog',
  templateUrl: './dialog.component.html',
})
export class DialogComponent {
  public coor: DialogData;

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.coor = data["coor"];
  }
}
