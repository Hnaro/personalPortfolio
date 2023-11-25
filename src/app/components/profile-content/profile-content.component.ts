import { Component, DoCheck, Input } from '@angular/core';
import { MainServiceService } from 'src/app/services/main-service.service';

@Component({
  selector: 'app-profile-content',
  templateUrl: './profile-content.component.html',
  styleUrls: ['./profile-content.component.css']
})
export class ProfileContentComponent implements DoCheck {
  isDarkModeActive: any;
  constructor(private themeService: MainServiceService) {}
  ngDoCheck(): void {
    this.isDarkModeActive = !this.themeService.getisDefaultThemeOn();
  }
}
