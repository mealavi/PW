import {AfterContentInit, Component, ElementRef, OnChanges, OnInit, Renderer2, ViewChild} from '@angular/core';
import {falseIfMissing} from "protractor/built/util";

@Component({
  selector: 'app-right-c',
  templateUrl: './right-c.component.html',
  styleUrls: ['./right-c.component.css']
})
export class RightCComponent implements OnInit,AfterContentInit,OnChanges {

  formHeight:number=window.innerHeight-(window.innerHeight/10) -10;
  formTopPadding:number=(this.formHeight-590)/2

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {


  }

  ngAfterContentInit(){



  }
  ngOnChanges(){

    this.formHeight =window.innerHeight-(window.innerHeight/10) -10;

  }

}
