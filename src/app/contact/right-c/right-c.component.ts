import {AfterContentInit, Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {falseIfMissing} from "protractor/built/util";

@Component({
  selector: 'app-right-c',
  templateUrl: './right-c.component.html',
  styleUrls: ['./right-c.component.css']
})
export class RightCComponent implements OnInit,AfterContentInit {

  formHeight:number=window.innerHeight-(window.innerHeight/10);


  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {


  }

  ngAfterContentInit(){



  }



}
