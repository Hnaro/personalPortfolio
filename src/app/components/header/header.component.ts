import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { fadetextDarkMode, slideLeftLightModeIcon, slideRightLightModeIcon } from 'src/app/animations/animations';
import { MainServiceService } from 'src/app/services/main-service.service';

@Component({
  selector: 'app-header',
  animations: [fadetextDarkMode, slideLeftLightModeIcon, slideRightLightModeIcon],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  // default icon
  lightModeIcon = "../../../assets/images/lightIcon.jpg";
  // logo
  ASLogo: any;
  colorMode: any;
  src: any;
  // default BGcontainer for icon
  isDefaultModeOn: any;
  isSlideLeftAnimDone: any;
  constructor(private themeService: MainServiceService) {}

  ngOnInit(): void {
    // default
     this.src = this.lightModeIcon;
     this.ASLogo = "../../../assets/images/ASLOGOLight.jpg";
     this.colorMode = 'light';
     this.isDefaultModeOn = true;
     this.isSlideLeftAnimDone = false;
  }
  // change theme
  onChangeTheme() {
    if (this.themeService.getisDefaultThemeOn()) {
      this.colorMode = "dark";
      this.ASLogo = "../../../assets/images/ASLOGODark.jpg";
      this.themeService.setThemeState(false);
      this.isDefaultModeOn = false;
      let i = setTimeout(() => {
        this.isSlideLeftAnimDone = true;
        clearTimeout(i);
      }, 50);
    } else {
      this.colorMode = "light";
      this.ASLogo = "../../../assets/images/ASLOGOLight.jpg";
      this.themeService.setThemeState(true);
      this.isSlideLeftAnimDone = false;
      let i = setTimeout(() => {
        this.isDefaultModeOn = true;
        clearTimeout(i);
      }, 50);
    }
    // sets the dark mode on to true or false to reset to default theme
  }
}
