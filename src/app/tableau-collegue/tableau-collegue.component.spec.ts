import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauCollegueComponent } from './tableau-collegue.component';

describe('TableauCollegueComponent', () => {
  let component: TableauCollegueComponent;
  let fixture: ComponentFixture<TableauCollegueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableauCollegueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauCollegueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
