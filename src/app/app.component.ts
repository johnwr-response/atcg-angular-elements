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
      this.content = "<p>A paragraph!</p>";
    },1000);
  }
}
