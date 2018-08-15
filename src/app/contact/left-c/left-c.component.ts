import {Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-left-c',
  templateUrl: './left-c.component.html',
  styleUrls: ['./left-c.component.css']
})
export class LeftCComponent implements OnInit {
  newInnerHeight;
  newInnerWidth;
@ViewChild('pic') pic:ElementRef;
  constructor(private elementRef:ElementRef,private rendere:Renderer2) {

  }

  ngOnInit() {
  this.newInnerHeight=window.innerHeight-(window.innerHeight/10)+"px";

  }
@HostListener('mouseenter', ['$event']) onHver(event){

}

  @HostListener('window:resize', ['$event'])
  onResize(event) {

    this.newInnerHeight = window.innerHeight-(window.innerHeight/10)
    this.newInnerWidth = event.target.innerWidth;
    console.log(this.newInnerHeight);
  }



}
