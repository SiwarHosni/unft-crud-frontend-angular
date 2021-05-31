import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentformComponent } from './centform.component';

describe('CentformComponent', () => {
  let component: CentformComponent;
  let fixture: ComponentFixture<CentformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
