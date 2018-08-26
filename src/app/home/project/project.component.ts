import {Component, Input, OnInit, Output} from '@angular/core';
import {ProjectModel} from "../../share/models/project.model";
import {Http} from "@angular/http";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input() project:ProjectModel;
  @Output() projectUot:ProjectModel;



  constructor(private http:Http) { }


  ngOnInit(){}

}
