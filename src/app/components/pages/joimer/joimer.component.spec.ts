import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoimerComponent } from './joimer.component';

describe('JoimerComponent', () => {
  let component: JoimerComponent;
  let fixture: ComponentFixture<JoimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
