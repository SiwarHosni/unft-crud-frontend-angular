import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvbenefComponent } from './nvbenef.component';

describe('NvbenefComponent', () => {
  let component: NvbenefComponent;
  let fixture: ComponentFixture<NvbenefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvbenefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvbenefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
