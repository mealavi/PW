import {Component, HostListener} from '@angular/core';
import {ProjectsRepoService} from "./share/projectsRepo.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ ProjectsRepoService ]
})
export class AppComponent {
  constructor(private projectsRepoService:ProjectsRepoService){}
  title = 'PW';
}
