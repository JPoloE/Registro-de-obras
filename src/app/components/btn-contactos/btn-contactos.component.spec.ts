import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnContactosComponent } from './btn-contactos.component';

describe('BtnContactosComponent', () => {
  let component: BtnContactosComponent;
  let fixture: ComponentFixture<BtnContactosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnContactosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnContactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
