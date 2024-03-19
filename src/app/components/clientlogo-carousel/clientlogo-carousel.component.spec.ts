import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientlogoCarouselComponent } from './clientlogo-carousel.component';

describe('ClientlogoCarouselComponent', () => {
  let component: ClientlogoCarouselComponent;
  let fixture: ComponentFixture<ClientlogoCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientlogoCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientlogoCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
