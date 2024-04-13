import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  accounts = [];

  constructor() {
    for (let i = 0; i < 4; i++) {
      this.accounts.push(i);
    }
  }
}
