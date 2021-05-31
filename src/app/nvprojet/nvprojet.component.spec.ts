import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvprojetComponent } from './nvprojet.component';

describe('NvprojetComponent', () => {
  let component: NvprojetComponent;
  let fixture: ComponentFixture<NvprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvprojetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
