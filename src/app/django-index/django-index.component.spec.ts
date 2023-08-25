import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DjangoIndexComponent } from './django-index.component';

describe('DjangoIndexComponent', () => {
  let component: DjangoIndexComponent;
  let fixture: ComponentFixture<DjangoIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DjangoIndexComponent]
    });
    fixture = TestBed.createComponent(DjangoIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
