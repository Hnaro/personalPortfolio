import { Component } from '@angular/core';

@Component({
  selector: 'app-other-info',
  templateUrl: './other-info.component.html',
  styleUrls: ['./other-info.component.css']
})
export class OtherInfoComponent {
  // for choosing which one to display
  // if option = 1 then store data to currentItems
  // if options = 2 then store projecDocs to currentItems
  // if option = 3 then show about data
  option: any;

  currentItems: any;
}
