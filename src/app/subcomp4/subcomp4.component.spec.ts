import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Subcomp4Component } from './subcomp4.component';

describe('Subcomp4Component', () => {
  let component: Subcomp4Component;
  let fixture: ComponentFixture<Subcomp4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Subcomp4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Subcomp4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
