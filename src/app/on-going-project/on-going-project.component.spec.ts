import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnGoingProjectComponent } from './on-going-project.component';

describe('OnGoingProjectComponent', () => {
  let component: OnGoingProjectComponent;
  let fixture: ComponentFixture<OnGoingProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnGoingProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnGoingProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
