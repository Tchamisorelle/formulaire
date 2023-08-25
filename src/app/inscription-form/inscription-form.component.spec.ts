import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionFormComponent } from './inscription-form.component';

describe('InscriptionFormComponent', () => {
  let component: InscriptionFormComponent;
  let fixture: ComponentFixture<InscriptionFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InscriptionFormComponent]
    });
    fixture = TestBed.createComponent(InscriptionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
