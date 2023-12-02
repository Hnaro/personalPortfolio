import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projects-item-content-box',
  templateUrl: './projects-item-content-box.component.html',
  styleUrls: ['./projects-item-content-box.component.css']
})
export class ProjectsItemContentBoxComponent {
  @Input() src: any;
  @Input() itemTitle: any;
}
