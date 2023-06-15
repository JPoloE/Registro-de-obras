import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnDetallesComponent } from './btn-detalles.component';

describe('BtnDetallesComponent', () => {
  let component: BtnDetallesComponent;
  let fixture: ComponentFixture<BtnDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnDetallesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
