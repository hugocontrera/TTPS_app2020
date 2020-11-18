import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigNuevoComponent } from './config-nuevo.component';

describe('ConfigNuevoComponent', () => {
  let component: ConfigNuevoComponent;
  let fixture: ComponentFixture<ConfigNuevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigNuevoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
