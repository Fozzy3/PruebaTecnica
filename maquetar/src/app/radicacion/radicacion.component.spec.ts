import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadicacionComponent } from './radicacion.component';

describe('RadicacionComponent', () => {
  let component: RadicacionComponent;
  let fixture: ComponentFixture<RadicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadicacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
