import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvclubComponent } from './nvclub.component';

describe('NvclubComponent', () => {
  let component: NvclubComponent;
  let fixture: ComponentFixture<NvclubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvclubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvclubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
