import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormExitClientComponent } from './form-exit-client.component';

describe('FormExitClientComponent', () => {
  let component: FormExitClientComponent;
  let fixture: ComponentFixture<FormExitClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormExitClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormExitClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
