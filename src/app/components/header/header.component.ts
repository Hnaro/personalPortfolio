import { Component, OnInit } from '@angular/core';
import { MainServiceService } from 'src/app/services/main-service.service';

@Component({
  selector: 'app-header',
  animations: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  // default icon
  lightModeIcon = "../../../assets/images/lightIcon.jpg"
  src = "";

  constructor(private themeService: MainServiceService) {}

  ngOnInit(): void {
    // default
     this.src = this.lightModeIcon;
  }
  // change theme
  onChangeTheme() {
    if (this.themeService.getisDefaultThemeOn()) {
      this.themeService.setThemeState(false);
    } else {
      this.themeService.setThemeState(true);
    }
    // sets the dark mode on to true or false to reset to default theme

  }
}
