import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoNuevoComponent } from './medico-nuevo.component';

describe('MedicoNuevoComponent', () => {
  let component: MedicoNuevoComponent;
  let fixture: ComponentFixture<MedicoNuevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicoNuevoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicoNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
