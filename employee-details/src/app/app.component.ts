import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = "Mayank Gupta";
  currentTime = `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}` 

  constructor() {
    setTimeout(() => {
      this.userName = "Random Value";
    }, 5000);

    setInterval(() => {
      this.currentTime = `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`;
    }, 1000);
  }
}
