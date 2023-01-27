import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomaticasComponent } from './automaticas.component';

describe('AutomaticasComponent', () => {
  let component: AutomaticasComponent;
  let fixture: ComponentFixture<AutomaticasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutomaticasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutomaticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
