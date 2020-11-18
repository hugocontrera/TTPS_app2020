import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolucionarPacienteComponent } from './evolucionar-paciente.component';

describe('EvolucionarPacienteComponent', () => {
  let component: EvolucionarPacienteComponent;
  let fixture: ComponentFixture<EvolucionarPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvolucionarPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvolucionarPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
