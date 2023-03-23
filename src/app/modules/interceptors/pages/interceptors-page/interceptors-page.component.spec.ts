import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterceptorsPageComponent } from './interceptors-page.component';

describe('InterceptorsPageComponent', () => {
  let component: InterceptorsPageComponent;
  let fixture: ComponentFixture<InterceptorsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterceptorsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterceptorsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
