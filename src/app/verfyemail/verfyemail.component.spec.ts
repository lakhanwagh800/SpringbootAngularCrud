import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerfyemailComponent } from './verfyemail.component';

describe('VerfyemailComponent', () => {
  let component: VerfyemailComponent;
  let fixture: ComponentFixture<VerfyemailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerfyemailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerfyemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
