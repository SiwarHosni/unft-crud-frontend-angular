import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvencaissementComponent } from './nvencaissement.component';

describe('NvencaissementComponent', () => {
  let component: NvencaissementComponent;
  let fixture: ComponentFixture<NvencaissementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvencaissementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvencaissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
