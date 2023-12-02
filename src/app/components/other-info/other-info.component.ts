import { Component, DoCheck, OnInit } from '@angular/core';
import { rotateArrowIcon } from 'src/app/animations/animations';
import { MainServiceService } from 'src/app/services/main-service.service';

@Component({
  selector: 'app-other-info',
  animations: [rotateArrowIcon],
  templateUrl: './other-info.component.html',
  styleUrls: ['./other-info.component.css']
})
export class OtherInfoComponent implements OnInit, DoCheck {
  // for choosing which one to display
  // if option = 1 then store data to currentItems
  // if options = 2 then store projecDocs to currentItems
  // if option = 3 then show about data
  option: any;
  arrowDownCurrentState: any;
  currentItems: any;
  isDarkModeActive: any;
  src: any;
  checkIconSrc: any;
  isWebPrjctSelected: any;
  filterLabel: any;

  constructor(private themeService: MainServiceService) {}
  ngDoCheck(): void {
    this.isDarkModeActive = !this.themeService.getisDefaultThemeOn();
    if (this.isDarkModeActive) {
      this.src = "../../../assets/images/arrowDownIconDarkMode.jpg"
      this.checkIconSrc = "../../../assets/images/darkModeCheckIcon.jpg"
    } else {
      this.src = "../../../assets/images/arrowDownIcon.jpg";
      this.checkIconSrc = "../../../assets/images/checkIcon.jpg"
    }
  }
  ngOnInit(): void {
      // default arrow state
      this.arrowDownCurrentState = "pointDown";
      this.src = "../../../assets/images/arrowDownIcon.jpg";
      this.isWebPrjctSelected = true;
      this.filterLabel = "Web Projects"
  }
  //on arrow clicked
  onClickRotateArrow() {
    if (this.arrowDownCurrentState == "pointDown") {
      this.arrowDownCurrentState = "pointUp";
    } else {
      this.arrowDownCurrentState = "pointDown";
    }
  }
  // selects the filter option
  selectFilter(option: number) {
    switch(option) {
      case 1:
        this.isWebPrjctSelected = true;
        this.filterLabel = "Web Projects"
        break;
      case 2:
        this.isWebPrjctSelected = false;
        this.filterLabel = "Other Projects"
        break;
    }
  }
}
