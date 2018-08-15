import {Component, ElementRef, HostListener, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
@Input() dynamicMargin:number;
  @ViewChild('kreisWrapper') nodes:ElementRef;
  @HostListener('mousemove') cirleMarginer($event:Event){




}

  constructor() { }

  ngOnInit() {

  }

  circleMarginer(event:MouseEvent){

  this.dynamicMargin=event.clientX+event.clientY;

  }

}
