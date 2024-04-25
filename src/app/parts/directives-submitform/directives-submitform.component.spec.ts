import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesSubmitformComponent } from './directives-submitform.component';

describe('DirectivesSubmitformComponent', () => {
  let component: DirectivesSubmitformComponent;
  let fixture: ComponentFixture<DirectivesSubmitformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectivesSubmitformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirectivesSubmitformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
