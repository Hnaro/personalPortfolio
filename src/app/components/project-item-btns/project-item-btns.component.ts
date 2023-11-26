import { Component, DoCheck, OnInit } from '@angular/core';
import { MainServiceService } from 'src/app/services/main-service.service';

@Component({
  selector: 'app-project-item-btns',
  templateUrl: './project-item-btns.component.html',
  styleUrls: ['./project-item-btns.component.css']
})
export class ProjectItemBtnsComponent implements DoCheck, OnInit {
  isDarkModeActive: any;
  isProjectSelected: any;
  isProjectDocsSelected: any;
  isAboutSelected: any;
  constructor(private themeService: MainServiceService) {}
  ngOnInit(): void {
    //defualt
    this.isProjectSelected = true;
    this.isDarkModeActive = !this.themeService.getisDefaultThemeOn()
  }
  ngDoCheck(): void {
    this.isDarkModeActive = !this.themeService.getisDefaultThemeOn();
  }
  onClickChange(option: number) {
    this.resetAllSelectedBtns();
    switch(option) {
      case 1:
        this.isProjectSelected = true;
        break;
      case 2:
        this.isProjectDocsSelected = true;
        break;
      case 3:
        this.isAboutSelected = true;
        break;

    }
  }
  // resets all selected buttons
  resetAllSelectedBtns() {
    this.isProjectSelected = false;
    this.isProjectDocsSelected = false;
    this.isAboutSelected = false;
  }
}
