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
      this.setHeaderTheme("dark",false, true, false);
    } else {
      this.setHeaderTheme("light", true, false, true);
    }
    // sets the dark mode on to true or false to reset to default theme
  }
  // sets up the theme
  setHeaderTheme(isTheme_dark_Or_light: string, defaultMode: boolean, isSlideLeftAnimDone: boolean, themeStateIsActive: boolean) {
    this.colorMode = isTheme_dark_Or_light;
    var upperCasedFirstLetter = isTheme_dark_Or_light.charAt(0).toUpperCase();
    this.ASLogo = "../../../assets/images/"+"ASLOGO"+upperCasedFirstLetter+isTheme_dark_Or_light.slice(1, isTheme_dark_Or_light.length)+".jpg";
    this.themeService.setThemeState(themeStateIsActive);
    if (defaultMode) {
      this.isSlideLeftAnimDone = isSlideLeftAnimDone;
      let i = setTimeout(() => {
        this.isDefaultModeOn = defaultMode;
        clearTimeout(i);
      }, 5);
    } else {
      this.isDefaultModeOn = defaultMode;
      let i = setTimeout(() => {
        this.isSlideLeftAnimDone = isSlideLeftAnimDone;
        clearTimeout(i);
      }, 5);
    }
  }
}
