import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  // default is light
  isDefaultThemeActive: Boolean;
  selectedOption: number;
  constructor() {
    // default is set to true lightMode or if false means darkMode is on
    this.isDefaultThemeActive = true;
    this.selectedOption = 0;
   }

  // set and ge tdefaultTheme
  setThemeState(isthemeActive: Boolean) {
    this.isDefaultThemeActive = isthemeActive;
  }
  getisDefaultThemeOn() {
    return this.isDefaultThemeActive;
  }

  setSelectedOption(option: number) {
    this.selectedOption = option;
  }
  getSelectedOption() {
    return this.selectedOption;
  }
}
