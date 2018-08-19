import { Component, OnInit } from '@angular/core';
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }


  onLeaveContact(path:string){
    if(this.router.url=="/contact"){


      this.router.navigate(['/'+path+''])
    }
    else if(path==""){
      this.router.navigate(['/'])

    }    else if(path=="services"){
      this.router.navigate(['/services'])

    }

      }
}
