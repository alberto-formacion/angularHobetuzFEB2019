import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstructuraComponent } from './estructura.component';

describe('EstructuraComponent', () => {
  let component: EstructuraComponent;
  let fixture: ComponentFixture<EstructuraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstructuraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstructuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
