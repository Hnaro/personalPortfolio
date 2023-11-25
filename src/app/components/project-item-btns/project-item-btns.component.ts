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
  constructor(private themeService: MainServiceService) {}
  ngOnInit(): void {
    //defualt
    this.isProjectSelected = true;
    this.isDarkModeActive = !this.themeService.getisDefaultThemeOn()
  }
  ngDoCheck(): void {
    this.isDarkModeActive = !this.themeService.getisDefaultThemeOn();
  }
}
