import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainForm } from './main-form';

describe('MainForm', () => {
  let component: MainForm;
  let fixture: ComponentFixture<MainForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
