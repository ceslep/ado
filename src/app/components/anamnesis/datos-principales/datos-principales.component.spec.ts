import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosPrincipalesComponent } from './datos-principales.component';

describe('DatosPrincipalesComponent', () => {
  let component: DatosPrincipalesComponent;
  let fixture: ComponentFixture<DatosPrincipalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosPrincipalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosPrincipalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
