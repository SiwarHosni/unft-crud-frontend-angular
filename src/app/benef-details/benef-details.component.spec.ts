import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefDetailsComponent } from './benef-details.component';

describe('BenefDetailsComponent', () => {
  let component: BenefDetailsComponent;
  let fixture: ComponentFixture<BenefDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenefDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
