import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectItemBtnsComponent } from './project-item-btns.component';

describe('ProjectItemBtnsComponent', () => {
  let component: ProjectItemBtnsComponent;
  let fixture: ComponentFixture<ProjectItemBtnsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectItemBtnsComponent]
    });
    fixture = TestBed.createComponent(ProjectItemBtnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
