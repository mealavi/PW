import {Http} from "@angular/http";
import {ProjectModel} from "./models/project.model";

export class ProjectsRepoService {


  projects:ProjectModel[];


  constructor(private http:Http) {
  }


  takeDate(name:string) {

    this.http.get('https://api.github.com/users/mealavi/repos').subscribe(
      (response)=>{


        response.json().forEach(
          (data)=>{

                this.projects.push(new ProjectModel(data.owner.login,data.name,data.description,'https://seeklogo.com/images/J/java-logo-41D4155FC3-seeklogo.com.png)',data.language));
          }
        )
        console.log(response.json())

      },
      (error)=>console.log(error)
    )


  }
}
