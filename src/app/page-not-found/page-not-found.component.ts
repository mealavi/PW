import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
  innerHeight=window.innerHeight
  quote:string="";
  author:string="";
  constructor(private http:Http) {}

  ngOnInit() {
    this.http.get('https://talaikis.com/api/quotes/random/').subscribe(
      (response)=>{


       this.quote= response.json().quote
       this.author= response.json().author

      },
      (error)=>console.log(error)
    )




  }



















}
