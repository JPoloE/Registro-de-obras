import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarcontactoclienteComponent } from './agregarcontactocliente.component';

describe('AgregarcontactoclienteComponent', () => {
  let component: AgregarcontactoclienteComponent;
  let fixture: ComponentFixture<AgregarcontactoclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarcontactoclienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarcontactoclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
