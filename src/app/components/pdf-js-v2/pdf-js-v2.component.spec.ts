import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfJsV2Component } from './pdf-js-v2.component';

describe('PdfJsV2Component', () => {
  let component: PdfJsV2Component;
  let fixture: ComponentFixture<PdfJsV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfJsV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfJsV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
