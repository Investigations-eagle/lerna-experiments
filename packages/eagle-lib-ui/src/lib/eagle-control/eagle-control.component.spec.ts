import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EagleControlComponent } from './eagle-control.component';

describe('EagleControlComponent', () => {
  let component: EagleControlComponent;
  let fixture: ComponentFixture<EagleControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EagleControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EagleControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
