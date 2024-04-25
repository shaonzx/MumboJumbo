import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventObjectComponent } from './event-object.component';

describe('EventObjectComponent', () => {
  let component: EventObjectComponent;
  let fixture: ComponentFixture<EventObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventObjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
