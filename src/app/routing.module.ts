import { ModuleWithProviders } from "@angular/compiler/src/core";
import { Routes, RouterModule } from "@angular/router";
import { PdfJsComponent } from "./components/pdf-js/pdf-js.component";
import { BodyComponent } from "./components/body/body.component";
import { HeaderComponent } from "./components/header/header.component";
import { PdfJsV2Component } from "./components/pdf-js-v2/pdf-js-v2.component";
import { PdfmakeComponent } from "./components/pdfmake/pdfmake.component";
import { KendoComponent } from "./components/kendo/kendo.component";
import { PdfJsV3Component } from "./components/pdf-js-v3/pdf-js-v3.component";
import { PdfDynamicReactiveFormsComponent } from "./components/pdf-dynamic-reactive-forms/pdf-dynamic-reactive-forms.component";


const appRoutes :Routes=[
    { path: '', redirectTo: '/pdfjs', pathMatch: 'full'},
    { path: 'pdfjs', component: PdfJsComponent },
    { path: 'pdfjs-v2', component: PdfJsV2Component},
    { path: 'header', component: HeaderComponent },
    { path: 'pdfmake', component: PdfmakeComponent },
    { path: 'kendo' , component: KendoComponent},
    { path: 'pdfjs-v3', component: PdfJsV3Component},
    { path: 'pdf-drf', component: PdfDynamicReactiveFormsComponent}
]
    export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);