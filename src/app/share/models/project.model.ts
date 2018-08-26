export class ProjectModel{

  name:string;
  owner:string;
  summary:string;
  imagePath:string;
  language:string;
  constructor(owner:string,name:string,summary:string,imagePath:string,language:string){

    this.owner=owner;
    this.name=name;
    this.summary=summary;
    this.imagePath=imagePath;
    this.language=language;


  }
}
