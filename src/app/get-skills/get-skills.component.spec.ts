import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSkillsComponent } from './get-skills.component';

describe('GetSkillsComponent', () => {
  let component: GetSkillsComponent;
  let fixture: ComponentFixture<GetSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
