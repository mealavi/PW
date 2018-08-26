import {Http} from "@angular/http";
import {ProjectModel} from "./models/project.model";
import {Injectable} from "@angular/core";

@Injectable()
export class ProjectsRepoService {


  projects:ProjectModel[]=[];


  constructor(private http:Http) {


    this.takeDate();

  }


  takeDate() {

    this.http.get('https://api.github.com/users/mealavi/repos').subscribe(
      (response)=>{


        response.json().forEach(
          (data)=>{
            let imagePath;

                switch (data.description.split('-')[0]){

                  case 'HTML' :
                  imagePath='src/app/share/images/if_html5_313112.png'

                        break;
                  case 'JAVA':
                    imagePath='src/app/share/images/java-logo-41D4155FC3-seeklogo.com.png'
                        break;
                    case 'Angular cli':
                    imagePath='src/app/share/images/if_angular_1145600.png'
                        break;
                    case 'spring':
                    imagePath='src/app/share/images/spring-3-logo-png-transparent.png'
                        break;
                  case 'TypeScript':
                    imagePath='src/app/share/images/typescript-logo-B29A3F462D-seeklogo.com.png'
                    break;
                  default:
                    imagePath='src/app/share/images/java-logo-41D4155FC3-seeklogo.com.png'
                    break;
                }
                this.projects.push(new ProjectModel(data.owner.login,data.name,data.description.split('-')[1],imagePath,data.language));
          }
        )


      },
      (error)=>console.log(error)
    )


  }
}
