import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvcfComponent } from './nvcf.component';

describe('NvcfComponent', () => {
  let component: NvcfComponent;
  let fixture: ComponentFixture<NvcfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvcfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvcfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
