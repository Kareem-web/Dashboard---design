import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {
  public isSuccess = this.data === 'success';

  constructor(@Inject(MAT_DIALOG_DATA) public data: string) {
  }
}
