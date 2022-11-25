import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlancheComponent } from './blanche.component';

describe('BlancheComponent', () => {
  let component: BlancheComponent;
  let fixture: ComponentFixture<BlancheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlancheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlancheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
