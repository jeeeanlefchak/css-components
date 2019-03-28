import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Jean Carlos Lefchak';
  loadingScreen: boolean = true;

  constructor() {

  }
  ngOnInit() {
    // this.reppet();
  }

  // public reppet() {
  //   if (this.loadingScreen) {
  //     setTimeout(() => {
  //       this.loadingScreen = !this.loadingScreen;
  //       this.reppet();
  //     }, 3000);
  //   } else {
  //     setTimeout(() => {
  //       this.loadingScreen = !this.loadingScreen;
  //       this.reppet();
  //     }, 5000);
  //   }
  // }

}
