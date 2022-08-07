import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondAreaComponent } from './second-area.component';

describe('SecondAreaComponent', () => {
  let component: SecondAreaComponent;
  let fixture: ComponentFixture<SecondAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
