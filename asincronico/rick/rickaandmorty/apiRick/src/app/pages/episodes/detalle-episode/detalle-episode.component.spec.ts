import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleEpisodeComponent } from './detalle-episode.component';

describe('DetalleEpisodeComponent', () => {
  let component: DetalleEpisodeComponent;
  let fixture: ComponentFixture<DetalleEpisodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleEpisodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleEpisodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
