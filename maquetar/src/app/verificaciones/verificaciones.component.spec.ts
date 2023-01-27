import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificacionesComponent } from './verificaciones.component';

describe('VerificacionesComponent', () => {
  let component: VerificacionesComponent;
  let fixture: ComponentFixture<VerificacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
