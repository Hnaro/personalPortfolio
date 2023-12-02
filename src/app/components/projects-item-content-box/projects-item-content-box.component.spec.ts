import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsItemContentBoxComponent } from './projects-item-content-box.component';

describe('ProjectsItemContentBoxComponent', () => {
  let component: ProjectsItemContentBoxComponent;
  let fixture: ComponentFixture<ProjectsItemContentBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsItemContentBoxComponent]
    });
    fixture = TestBed.createComponent(ProjectsItemContentBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
