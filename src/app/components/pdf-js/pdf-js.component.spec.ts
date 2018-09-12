import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfJsComponent } from './pdf-js.component';

describe('PdfJsComponent', () => {
  let component: PdfJsComponent;
  let fixture: ComponentFixture<PdfJsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfJsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
