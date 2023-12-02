import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './mainComponents/footer/footer.component';
import { HeaderComponent } from './mainComponents/header/header.component';
import { MainServiceService } from './services/main-service.service';
import { MainContentComponent } from './mainComponents/main-content/main-content.component';
import { ProfileContentComponent } from './components/profile-content/profile-content.component';
import { OtherInfoComponent } from './components/other-info/other-info.component';
import { ProjectItemBtnsComponent } from './components/project-item-btns/project-item-btns.component';
import { ProjectItemComponent } from './components/project-item/project-item.component';
import { ProjectsItemContentBoxComponent } from './components/projects-item-content-box/projects-item-content-box.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainContentComponent,
    ProfileContentComponent,
    OtherInfoComponent,
    ProjectItemBtnsComponent,
    ProjectItemComponent,
    ProjectsItemContentBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [MainServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
