import {Component} from '@angular/core';
import {NotificationsService} from "angular2-notifications";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private _service: NotificationsService) {}
  public options = {
    timeOut: 5000,
    lastOnBottom: true
  };

  create() {
    this._service.success('bla', 'example')
  }

}
