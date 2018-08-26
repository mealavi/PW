import {Component, Input, OnInit} from '@angular/core';
import {ProjectModel} from "../../share/models/project.model";
import {Http} from "@angular/http";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input() project:ProjectModel;




  constructor(private http:Http) { }


  ngOnInit(){


    this.http.get('https://api.github.com/users/mealavi/repos').subscribe(
      (response)=>{
        response.json().forEach(
          (data)=>{
            console.log(data.name)
          }
        )
console.log(response.json())

      },
      (error)=>console.log(error)
    )

  }

}
