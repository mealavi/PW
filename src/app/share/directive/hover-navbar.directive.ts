import {Directive, ElementRef, HostListener, OnInit, Renderer2, ViewChild} from '@angular/core';

@Directive({
  selector: '[appHoverNavbar]'
})
export class HoverNavbarDirective implements OnInit {

  constructor(private elementRef: ElementRef, private rendrer: Renderer2) {
  }


  ngOnInit() {


  }
@HostListener('mouseenter') mouseEnter(eventDate:Event){

  this.rendrer.setStyle(this.elementRef.nativeElement,'border-bottom','1px solid #212121');


}
}
