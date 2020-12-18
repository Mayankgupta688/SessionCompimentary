import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = "Mayank Gupta dfgdg";
  myColor = "red";

  myNames = ["Mayank", "Ankit", "Anshul"];
  currentTime = `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}` 

  constructor() {
    setTimeout(() => {
      this.userName = "Anshul Gupta";
      this.myColor = "green";
      this.myNames.push("Aniket")
    }, 5000);

    

    setInterval(() => {
      this.currentTime = `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`;
    }, 1000);
  }
}
