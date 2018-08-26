import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { ContainerComponent } from './contact/container/container.component';
import { LeftCComponent } from './contact/left-c/left-c.component';
import { RightCComponent } from './contact/right-c/right-c.component';
import { FooterComponent } from './footer/footer.component';
import { HoverNavbarDirective } from './share/directive/hover-navbar.directive';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {FormsModule} from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './home/home.component';
import {FormsdateService} from "./share/formsdate.service";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {HttpClientModule} from "@angular/common/http";
import {HttpModule} from "@angular/http";
import { ProjectComponent } from './home/project/project.component';

const appRoutes:Routes=[

  {path:'',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'services',component:ServicesComponent},
  {path:'services/:id',component:ServicesComponent},
  {path:'not-found',component:PageNotFoundComponent},
  {path:'**',redirectTo:'/not-found'}


]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContainerComponent,
    LeftCComponent,
    RightCComponent,
    FooterComponent,
    HoverNavbarDirective,
    ContactComponent,
    ServicesComponent,
    HomeComponent,
    PageNotFoundComponent,
    ProjectComponent,



  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
