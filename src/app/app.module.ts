import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { PdfJsComponent } from './components/pdf-js/pdf-js.component';
import { routing } from './routing.module';
import { RouterModule } from '@angular/router';
import { PdfJsV2Component } from './components/pdf-js-v2/pdf-js-v2.component';
import { PdfmakeComponent } from './components/pdfmake/pdfmake.component';
import { KendoComponent } from './components/kendo/kendo.component';
import { PdfJsV3Component } from './components/pdf-js-v3/pdf-js-v3.component';
import { PdfDynamicReactiveFormsComponent } from './components/pdf-dynamic-reactive-forms/pdf-dynamic-reactive-forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PdfViewerModule } from 'ng2-pdf-viewer';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    PdfJsComponent,
    PdfJsV2Component,
    PdfmakeComponent,
    KendoComponent,
    PdfJsV3Component,
    PdfDynamicReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    routing,
    PDFExportModule,
    BrowserModule,
    ReactiveFormsModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
