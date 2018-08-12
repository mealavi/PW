import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() {
  }

  menuUp: boolean = false;

  ngOnInit() {
  }

  toggleMenu() {

    if (this.menuUp) {

      this.menuUp=false;

    }
    else{

      this.menuUp=true;
    }

  }
}
