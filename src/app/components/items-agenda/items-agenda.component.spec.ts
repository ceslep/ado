import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsAgendaComponent } from './items-agenda.component';

describe('ItemsAgendaComponent', () => {
  let component: ItemsAgendaComponent;
  let fixture: ComponentFixture<ItemsAgendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsAgendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
