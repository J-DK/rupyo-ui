import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerCreditLimitComponent } from './employer-credit-limit.component';

describe('EmployerCreditLimitComponent', () => {
  let component: EmployerCreditLimitComponent;
  let fixture: ComponentFixture<EmployerCreditLimitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerCreditLimitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerCreditLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
