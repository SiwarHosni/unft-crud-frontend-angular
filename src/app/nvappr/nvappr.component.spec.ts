import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvapprComponent } from './nvappr.component';

describe('NvapprComponent', () => {
  let component: NvapprComponent;
  let fixture: ComponentFixture<NvapprComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvapprComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvapprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
