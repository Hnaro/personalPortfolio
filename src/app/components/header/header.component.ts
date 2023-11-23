import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { fadetextDarkMode } from 'src/app/animations/animations';
import { MainServiceService } from 'src/app/services/main-service.service';

@Component({
  selector: 'app-header',
  animations: [fadetextDarkMode],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  // default icon
  lightModeIcon = "../../../assets/images/lightIcon.jpg"
  src = "";
  colorMode: any;
  // default BGcontainer for icon
  isDefaultModeOn: any;

  constructor(private themeService: MainServiceService) {}

  ngOnInit(): void {
    // default
     this.src = this.lightModeIcon;
     this.colorMode = "light";
     this.isDefaultModeOn = this.themeService.getisDefaultThemeOn();
  }
  // change theme
  onChangeTheme() {
    if (this.themeService.getisDefaultThemeOn()) {
      this.colorMode = "dark";
      this.themeService.setThemeState(false);
    } else {
      this.colorMode = "light";
      this.themeService.setThemeState(true);
    }
    this.isDefaultModeOn = this.themeService.getisDefaultThemeOn();
    // sets the dark mode on to true or false to reset to default theme
  }
}
