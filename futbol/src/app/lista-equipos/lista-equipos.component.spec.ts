import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEquiposComponent } from './lista-equipos.component';

describe('ListaEquiposComponent', () => {
  let component: ListaEquiposComponent;
  let fixture: ComponentFixture<ListaEquiposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaEquiposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEquiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
