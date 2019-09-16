import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosListsComponent } from './todos-lists.component';

describe('TodosListsComponent', () => {
  let component: TodosListsComponent;
  let fixture: ComponentFixture<TodosListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
