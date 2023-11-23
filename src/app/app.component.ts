import { Component, DoCheck } from '@angular/core';
import { MainServiceService } from './services/main-service.service';
import { fadeBGDarkMode } from './animations/animations';

@Component({
  selector: 'app-root',
  animations: [fadeBGDarkMode],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck{
  title = 'finalPortfolio';

  // default theme for main bg
  isDefaultThemeOn: any;
  colorMode: any;
  // inject the main service here
  constructor(private themeService: MainServiceService) {}
  ngDoCheck(): void {
    if (this.themeService.getisDefaultThemeOn()) {
      this.colorMode = "light";
      this.isDefaultThemeOn = true;
    } else {
      this.colorMode = "dark";
      this.isDefaultThemeOn = false;
    }
  }
}
