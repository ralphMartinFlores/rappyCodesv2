import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KireiComponent } from './kirei.component';

describe('KireiComponent', () => {
  let component: KireiComponent;
  let fixture: ComponentFixture<KireiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KireiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KireiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
