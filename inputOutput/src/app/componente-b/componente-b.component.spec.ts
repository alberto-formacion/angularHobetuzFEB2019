import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteBComponent } from './componente-b.component';

describe('ComponenteBComponent', () => {
  let component: ComponenteBComponent;
  let fixture: ComponentFixture<ComponenteBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
