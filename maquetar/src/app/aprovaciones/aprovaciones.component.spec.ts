import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprovacionesComponent } from './aprovaciones.component';

describe('AprovacionesComponent', () => {
  let component: AprovacionesComponent;
  let fixture: ComponentFixture<AprovacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AprovacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AprovacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
