import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricMobolityComponent } from './electric-mobolity.component';

describe('ElectricMobolityComponent', () => {
  let component: ElectricMobolityComponent;
  let fixture: ComponentFixture<ElectricMobolityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricMobolityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricMobolityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
