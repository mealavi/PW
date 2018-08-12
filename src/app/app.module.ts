import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NavbarComponent } from './home/navbar/navbar.component';
import { ContainerComponent } from './home/container/container.component';
import { LeftCComponent } from './home/left-c/left-c.component';
import { RightCComponent } from './home/right-c/right-c.component';
import { FooterComponent } from './footer/footer.component';
import { HoverNavbarDirective } from './share/directive/hover-navbar.directive';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContainerComponent,
    LeftCComponent,
    RightCComponent,
    FooterComponent,
    HoverNavbarDirective,

  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
