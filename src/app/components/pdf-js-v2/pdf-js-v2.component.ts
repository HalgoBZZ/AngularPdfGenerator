import { Component, OnInit, Inject } from '@angular/core';
import * as jsPDF from 'jspdf';
import * as $ from 'jquery';

@Component({
  selector: 'app-pdf-js-v2',
  templateUrl: './pdf-js-v2.component.html',
  styleUrls: ['./pdf-js-v2.component.css'],
  providers: [
    { provide: 'Window', useValue: window }
    ]
})
export class PdfJsV2Component implements OnInit {

  
  constructor(
    @Inject('Window') private window: Window,
    ) { }
     
    ngOnInit() {
    }
     
    download() {
     
    var doc = new jsPDF();

    var options = {
      pagesplit: true
    };
    // add simple text to PDF
    doc.text(20, 20, 'Hello world!');
    doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');
    doc.save('Test.pdf'); // Save the PDF

    //export full page as pdf content
    doc.addPage(); //add new page to pdf
    /*doc.addHTML(document.body,function(){
      doc.save('test.pdf');
    })*/

    doc.addPage();
    doc.text(20, 20, 'http://www.coding4developers.com/');    
    //exprt specific part of document as PDF or add it to PDF to be expoted
    doc.addHTML($('#content'), 0, 0, options,function(){
        doc.save('test.pdf');
  });
    
    }

}
// yarn add html2canvas
// yarn add jspdf2
// yarn add @types/jspdf
// angular-cli.json ==>   "scripts": [ "../node_modules/jspdf/dist/jspdf.min.js" ]