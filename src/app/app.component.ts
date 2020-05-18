import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  content = null;
  constructor() {
    setTimeout(() => {
      this.content = "<app-alert message='Rendered Dynamically!'></app-alert>";
    },1000);
  }
}
