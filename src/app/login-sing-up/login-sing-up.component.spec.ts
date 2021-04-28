import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSingUpComponent } from './login-sing-up.component';

describe('LoginSingUpComponent', () => {
  let component: LoginSingUpComponent;
  let fixture: ComponentFixture<LoginSingUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginSingUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSingUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
