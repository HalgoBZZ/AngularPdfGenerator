import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfJsV3Component } from './pdf-js-v3.component';

describe('PdfJsV3Component', () => {
  let component: PdfJsV3Component;
  let fixture: ComponentFixture<PdfJsV3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfJsV3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfJsV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
