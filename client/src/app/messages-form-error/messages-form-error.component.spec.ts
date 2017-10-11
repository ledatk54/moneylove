import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesFormErrorComponent } from './messages-form-error.component';

describe('MessagesFormErrorComponent', () => {
  let component: MessagesFormErrorComponent;
  let fixture: ComponentFixture<MessagesFormErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesFormErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesFormErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
