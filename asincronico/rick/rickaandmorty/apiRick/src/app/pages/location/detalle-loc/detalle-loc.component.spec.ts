import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleLocComponent } from './detalle-loc.component';

describe('DetalleLocComponent', () => {
  let component: DetalleLocComponent;
  let fixture: ComponentFixture<DetalleLocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleLocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleLocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
