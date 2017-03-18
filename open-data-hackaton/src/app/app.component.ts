import {Component} from '@angular/core';
import {NotificationsService} from "angular2-notifications";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  //constructor(private serviceNotification: NotificationsService) {
    //console.log(this.serviceNotification.success('Some Title', 'Some Content'));
  //}

}
