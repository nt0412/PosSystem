import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatedPageManagerComponent } from './calculated-page-manager.component';

describe('CalculatedPageManagerComponent', () => {
  let component: CalculatedPageManagerComponent;
  let fixture: ComponentFixture<CalculatedPageManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatedPageManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatedPageManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
