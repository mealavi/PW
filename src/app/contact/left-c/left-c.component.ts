import {Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-left-c',
  templateUrl: './left-c.component.html',
  styleUrls: ['./left-c.component.css']
})
export class LeftCComponent implements OnInit {
  newInnerHeight;
  ifSmallWindow:boolean=false;
  newInnerWidth;
@ViewChild('pic') pic:ElementRef;
  constructor(private elementRef:ElementRef,private rendere:Renderer2) {

  }

  ngOnInit() {
  this.newInnerHeight=window.innerHeight-(window.innerHeight/10)+"px";
    if(window.innerWidth<768){

      this.ifSmallWindow=true;
    }
    else{
      this.ifSmallWindow=false;
    }
  }
@HostListener('mouseenter', ['$event']) onHver(event){

}

  @HostListener('window:resize', ['$event'])
  onResize(event) {
if(window.innerWidth<768){

  this.ifSmallWindow=true;
}
else{
  this.ifSmallWindow=false;
}
    this.newInnerHeight = window.innerHeight-(window.innerHeight/10)
    this.newInnerWidth = event.target.innerWidth;

  }



}
