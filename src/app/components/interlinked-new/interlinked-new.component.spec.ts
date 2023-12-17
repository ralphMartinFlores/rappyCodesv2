import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterlinkedNewComponent } from './interlinked-new.component';

describe('InterlinkedNewComponent', () => {
  let component: InterlinkedNewComponent;
  let fixture: ComponentFixture<InterlinkedNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterlinkedNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterlinkedNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
