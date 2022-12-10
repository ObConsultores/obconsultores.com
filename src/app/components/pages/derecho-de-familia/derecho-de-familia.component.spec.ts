import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DerechoDeFamiliaComponent } from './derecho-de-familia.component';

describe('DerechoDeFamiliaComponent', () => {
  let component: DerechoDeFamiliaComponent;
  let fixture: ComponentFixture<DerechoDeFamiliaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DerechoDeFamiliaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DerechoDeFamiliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
