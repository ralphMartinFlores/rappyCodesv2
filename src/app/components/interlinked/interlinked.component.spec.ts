import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterlinkedComponent } from './interlinked.component';

describe('InterlinkedComponent', () => {
  let component: InterlinkedComponent;
  let fixture: ComponentFixture<InterlinkedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterlinkedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterlinkedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
