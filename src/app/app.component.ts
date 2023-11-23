import { Component, DoCheck } from '@angular/core';
import { MainServiceService } from './services/main-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck{
  title = 'finalPortfolio';

  // default theme for main bg
  isDefaultThemeOn: any;
  // inject the main service here
  constructor(private themeService: MainServiceService) {}
  ngDoCheck(): void {
    if (this.themeService.getisDefaultThemeOn()) {
      this.isDefaultThemeOn = true;
    } else {
      this.isDefaultThemeOn = false;
    }
  }
}
