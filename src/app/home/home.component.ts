import {Component, HostListener, OnChanges, OnInit} from '@angular/core';
import {ProjectsRepoService} from "../share/projectsRepo.service";
import {ProjectModel} from "../share/models/project.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit , OnChanges {
  Height=window.innerHeight+'px';
  extraHeight=1.2*window.innerHeight+'px';
  projects:ProjectModel[];
   constructor(private projectRepoService:ProjectsRepoService) { }

  ngOnInit() {
     this.projects=this.projectRepoService.projects;

  }

  @HostListener('window:resize',['$event'])
  changeSize(event){

    this.Height=window.innerHeight+'px';
  }

  ngOnChanges(){



  }

}
