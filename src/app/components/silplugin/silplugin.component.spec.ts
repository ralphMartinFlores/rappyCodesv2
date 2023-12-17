import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SilpluginComponent } from './silplugin.component';

describe('SilpluginComponent', () => {
  let component: SilpluginComponent;
  let fixture: ComponentFixture<SilpluginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SilpluginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SilpluginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
