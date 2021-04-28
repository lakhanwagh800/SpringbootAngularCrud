import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyemailForForgotComponent } from './verifyemail-for-forgot.component';

describe('VerifyemailForForgotComponent', () => {
  let component: VerifyemailForForgotComponent;
  let fixture: ComponentFixture<VerifyemailForForgotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyemailForForgotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyemailForForgotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
