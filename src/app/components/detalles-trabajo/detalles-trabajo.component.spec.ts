import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesTrabajoComponent } from './detalles-trabajo.component';

describe('DetallesTrabajoComponent', () => {
  let component: DetallesTrabajoComponent;
  let fixture: ComponentFixture<DetallesTrabajoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesTrabajoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
