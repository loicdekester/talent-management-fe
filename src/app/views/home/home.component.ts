import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  experienceList = ["firstElement"]

  constructor() { }

  ngOnInit(): void {
  }

  addExperience() {
    this.experienceList.push("element");
  }

}
