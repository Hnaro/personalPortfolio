import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { MainServiceService } from 'src/app/services/main-service.service';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent implements OnInit, DoCheck{

  itemTitle: any = "TicTacToe Project";
  currentItems: any[] = [];

  projectsList: any = [{
    projectTitle: "TicTacToe",
    projectImage: "../../../assets/images/item_1.jpg"
  }];
  constructor(private mainService: MainServiceService) {
    //default
    this.currentItems = this.projectsList;
  }
  ngDoCheck(): void {
    this.setCurrentOptionListSelected();
  }
  ngOnInit(): void {}

  setCurrentOptionListSelected() {
    switch(this.mainService.getSelectedOption()) {
      case 1:
        this.currentItems = this.projectsList;
        break;
      case 2:
        this.currentItems = [];
        break;
      case 3:
        this.currentItems = [];
        break;
    }
  }
}
