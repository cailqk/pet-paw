import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: any;
  animals: [] = [];

  constructor() { }

  ngOnInit(): void {
     this.user = JSON.parse(localStorage.getItem('user') as any).email;
  }

}
