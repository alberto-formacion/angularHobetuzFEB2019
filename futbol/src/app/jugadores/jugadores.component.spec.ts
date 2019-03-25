import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadoresComponent } from './jugadores.component';

describe('JugadoresComponent', () => {
  let component: JugadoresComponent;
  let fixture: ComponentFixture<JugadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JugadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JugadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
