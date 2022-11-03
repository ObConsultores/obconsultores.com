import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DerechoPenalComponent } from './derecho-penal.component';

describe('DerechoPenalComponent', () => {
  let component: DerechoPenalComponent;
  let fixture: ComponentFixture<DerechoPenalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DerechoPenalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DerechoPenalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
