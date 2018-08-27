import {
  AfterViewInit, Component, ElementRef, HostBinding, HostListener, OnChanges, OnInit, Renderer2,
  ViewChild
} from '@angular/core';
import {ProjectsRepoService} from "../share/projectsRepo.service";
import {ProjectModel} from "../share/models/project.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit , OnChanges ,AfterViewInit {
  Height=window.innerHeight+'px';
  extraHeight=1.2*window.innerHeight+'px';
  projects:ProjectModel[];

  start2: boolean = false
  start: boolean = false
  start3: boolean = false
  start4: boolean = false
  start5: boolean = false
  start6: boolean = false

  stringInterpolation: string = "What does a full stack developer do ...?"
  stringInterpolation2: string = "In web development, there are frontend and backend developers, as a rule."
  stringInterpolation3: string = " Those who build interfaces and those who build software engines behind it, a full stack developer can basically do it all."
  stringInterpolation6: string = " :)"
  helloWorld: string = "{Hello world ...}"
  stringInterpolation5: string = "My name is MoAl, and I am a full stack developer"
   constructor(private projectRepoService:ProjectsRepoService,private rendere:Renderer2) { }

  ngOnInit() {
     this.projects=this.projectRepoService.projects;
    setTimeout(() => this.start = true, 100)
    setTimeout(() => this.start2 = true, 2500)
    setTimeout(() => this.start3 = true, 4500)
    setTimeout(() => this.start4 = true, 12500)
    setTimeout(() => this.start5 = true, 12500)
    setTimeout(() => this.start6 = true, 13500)
  }


  onTypingAnimationComplete () {
    console.log('#TYPING ANIMATION COMPLETE')
    // ...
  }

  ngAfterViewInit(){



  }
  showDetails(){}
  @HostListener('window:resize',['$event'])
  changeSize(event){

    this.Height=window.innerHeight+'px';
  }



  ngOnChanges(){



  }

}
