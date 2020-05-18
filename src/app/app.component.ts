import {Component, Injector} from '@angular/core';
import {createCustomElement} from '@angular/elements';
import {AlertComponent} from "./alert.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  content = null;
  constructor(injector: Injector) {
    const AlertElement = createCustomElement(AlertComponent, {injector: injector});
    customElements.define('my-alert', AlertElement);
    setTimeout(() => {
      this.content = "<my-alert message='Rendered Dynamically!'></my-alert>";
    },1000);
  }
}
