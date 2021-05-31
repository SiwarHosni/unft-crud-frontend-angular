import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvformationComponent } from './nvformation.component';

describe('NvformationComponent', () => {
  let component: NvformationComponent;
  let fixture: ComponentFixture<NvformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
