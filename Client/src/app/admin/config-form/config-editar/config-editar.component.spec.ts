import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigEditarComponent } from './config-editar.component';

describe('ConfigEditarComponent', () => {
  let component: ConfigEditarComponent;
  let fixture: ComponentFixture<ConfigEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
