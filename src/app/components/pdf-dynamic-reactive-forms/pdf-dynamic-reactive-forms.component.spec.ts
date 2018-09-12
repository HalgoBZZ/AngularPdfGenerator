import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfDynamicReactiveFormsComponent } from './pdf-dynamic-reactive-forms.component';

describe('PdfDynamicReactiveFormsComponent', () => {
  let component: PdfDynamicReactiveFormsComponent;
  let fixture: ComponentFixture<PdfDynamicReactiveFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfDynamicReactiveFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfDynamicReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
