import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnClientesComponent } from './btn-clientes.component';

describe('BtnClientesComponent', () => {
  let component: BtnClientesComponent;
  let fixture: ComponentFixture<BtnClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnClientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
