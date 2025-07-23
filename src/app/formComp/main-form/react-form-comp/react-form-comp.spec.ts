import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactFormComp } from './react-form-comp';

describe('ReactFormComp', () => {
  let component: ReactFormComp;
  let fixture: ComponentFixture<ReactFormComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReactFormComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactFormComp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
