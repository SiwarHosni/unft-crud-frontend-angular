import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiairesComponent } from './beneficiaires.component';

describe('BeneficiairesComponent', () => {
  let component: BeneficiairesComponent;
  let fixture: ComponentFixture<BeneficiairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeneficiairesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficiairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
