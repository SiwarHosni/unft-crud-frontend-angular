import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvmcComponent } from './nvmc.component';

describe('NvmcComponent', () => {
  let component: NvmcComponent;
  let fixture: ComponentFixture<NvmcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvmcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvmcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
