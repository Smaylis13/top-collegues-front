import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCollegueComponent } from './list-collegue.component';

describe('ListCollegueComponent', () => {
  let component: ListCollegueComponent;
  let fixture: ComponentFixture<ListCollegueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCollegueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCollegueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
