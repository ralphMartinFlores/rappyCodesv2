import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CannonmotorsComponent } from './cannonmotors.component';

describe('CannonmotorsComponent', () => {
  let component: CannonmotorsComponent;
  let fixture: ComponentFixture<CannonmotorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CannonmotorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CannonmotorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
